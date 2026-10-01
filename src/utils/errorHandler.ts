/**
 * Utilidad para manejar y formatear mensajes de error
 * Proporciona funciones consistentes para el manejo de errores en la aplicación
 */

/**
 * Tipos de errores conocidos en la aplicación
 */
export type ErrorType = 
  | 'NETWORK_ERROR'
  | 'SERVER_ERROR'
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'TIMEOUT'
  | 'UNKNOWN';

/**
 * Interfaz para errores estructurados de la aplicación
 */
export interface AppError {
  type: ErrorType;
  message: string;
  originalError?: Error;
  timestamp: Date;
  code?: string;
}

/**
 * Interfaz para opciones de formateo de errores
 */
interface FormatErrorOptions {
  includeTimestamp?: boolean;
  includeCode?: boolean;
  userFriendly?: boolean;
}

/**
 * Mapeo de tipos de error a mensajes amigables para el usuario
 */
const errorMessages: Record<ErrorType, string> = {
  NETWORK_ERROR: 'No se pudo conectar al servidor. Verifica tu conexión a internet.',
  SERVER_ERROR: 'El servidor tuvo un problema. Por favor, intenta más tarde.',
  VALIDATION_ERROR: 'Los datos proporcionados no son válidos.',
  NOT_FOUND: 'El recurso solicitado no fue encontrado.',
  TIMEOUT: 'La solicitud tardó demasiado. Por favor, intenta de nuevo.',
  UNKNOWN: 'Ocurrió un error inesperado. Por favor, contacta al soporte.',
};

/**
 * Mapeo de códigos HTTP a tipos de error
 */
const httpStatusToErrorType = (status: number): ErrorType => {
  if (status >= 500) return 'SERVER_ERROR';
  if (status === 404) return 'NOT_FOUND';
  if (status === 400 || status === 422) return 'VALIDATION_ERROR';
  if (status === 0 || status >= 502) return 'NETWORK_ERROR';
  return 'UNKNOWN';
};

/**
 * Crea un error estructurado de la aplicación
 * @param type - Tipo de error
 * @param message - Mensaje descriptivo
 * @param originalError - Error original de JavaScript (opcional)
 * @param code - Código de error adicional (opcional)
 */
export const createAppError = (
  type: ErrorType,
  message: string,
  originalError?: Error,
  code?: string
): AppError => ({
  type,
  message,
  originalError,
  timestamp: new Date(),
  code,
});

/**
 * Crea un error a partir de una respuesta de Axios
 * @param status - Código de estado HTTP
 * @param statusText - Texto del estado HTTP
 * @param originalError - Error original de Axios (opcional)
 */
export const createErrorFromResponse = (
  status: number,
  statusText: string,
  originalError?: Error
): AppError => {
  const type = httpStatusToErrorType(status);
  const message = statusText || errorMessages[type];
  return createAppError(type, message, originalError, `HTTP_${status}`);
};

/**
 * Crea un error de red (conexión fallida)
 * @param originalError - Error original de la red
 */
export const createNetworkError = (originalError?: Error): AppError =>
  createAppError('NETWORK_ERROR', errorMessages.NETWORK_ERROR, originalError, 'NETWORK');

/**
 * Crea un error de timeout
 * @param originalError - Error original
 */
export const createTimeoutError = (originalError?: Error): AppError =>
  createAppError('TIMEOUT', errorMessages.TIMEOUT, originalError, 'TIMEOUT');

/**
 * Formatea un error para mostrar al usuario
 * @param error - Error de la aplicación
 * @param options - Opciones de formateo
 */
export const formatError = (
  error: AppError | Error,
  options: FormatErrorOptions = {}
): string => {
  const { includeTimestamp = false, includeCode = false, userFriendly = true } = options;

  let message: string;
  let type: ErrorType = 'UNKNOWN';
  let code: string | undefined;
  let timestamp: Date;

  if ('type' in error && 'message' in error) {
    const appError = error as AppError;
    message = userFriendly ? errorMessages[appError.type] || appError.message : appError.message;
    type = appError.type;
    code = appError.code;
    timestamp = appError.timestamp;
  } else {
    const rawError = error as Error;
    message = rawError.message || errorMessages.UNKNOWN;
    timestamp = new Date();
  }

  const parts: string[] = [message];

  if (includeTimestamp) {
    parts.push(`(${timestamp.toLocaleString()})`);
  }

  if (includeCode && code) {
    parts.push(`[${code}]`);
  }

  return parts.join(' ');
};

/**
 * Obtiene el título del error según su tipo
 * @param error - Error de la aplicación
 */
export const getErrorTitle = (error: AppError | Error): string => {
  if ('type' in error) {
    const appError = error as AppError;
    switch (appError.type) {
      case 'NETWORK_ERROR':
        return 'Error de Conexión';
      case 'SERVER_ERROR':
        return 'Error del Servidor';
      case 'VALIDATION_ERROR':
        return 'Datos Inválidos';
      case 'NOT_FOUND':
        return 'No Encontrado';
      case 'TIMEOUT':
        return 'Tiempo de Espera Agotado';
      default:
        return 'Error Inesperado';
    }
  }
  return 'Error';
};

/**
 * Determina si un error es de red
 * @param error - Error a verificar
 */
export const isNetworkError = (error: AppError | Error): boolean => {
  if ('type' in error) {
    return (error as AppError).type === 'NETWORK_ERROR';
  }
  const rawError = error as Error;
  return (
    rawError.message.includes('network') ||
    rawError.message.includes('fetch') ||
    rawError.message.includes('ECONNREFUSED')
  );
};

/**
 * Determina si un error es recuperable (puede intentarse de nuevo)
 * @param error - Error a verificar
 */
export const isRecoverableError = (error: AppError | Error): boolean => {
  if ('type' in error) {
    const appError = error as AppError;
    return (
      appError.type === 'NETWORK_ERROR' ||
      appError.type === 'TIMEOUT' ||
      appError.type === 'SERVER_ERROR'
    );
  }
  return true;
};

/**
 * Maneja errores de promesas rejections
 * @param reason - Razón del rejection
 */
export const handleUnhandledRejection = (reason: unknown): AppError => {
  if (reason instanceof Error) {
    if (reason.message.includes('network') || reason.message.includes('fetch')) {
      return createNetworkError(reason);
    }
    return createAppError('UNKNOWN', reason.message, reason);
  }
  return createAppError(
    'UNKNOWN',
    typeof reason === 'string' ? reason : 'Error desconocido',
    undefined
  );
};

/**
 * Envuelve una función async con manejo de errores
 * @param fn - Función a ejecutar
 * @returns Tupla con resultado o error
 */
export const tryCatch = async <T>(
  fn: () => Promise<T>
): Promise<[T | null, AppError | null]> => {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    if (error instanceof Error) {
      const appError = createAppError('UNKNOWN', error.message, error);
      return [null, appError];
    }
    return [null, createAppError('UNKNOWN', String(error))];
  }
};

/**
 * Clase de error personalizada para la aplicación
 */
export class AppErrorException extends Error {
  public readonly type: ErrorType;
  public readonly code?: string;
  public readonly timestamp: Date;

  constructor(type: ErrorType, message: string, code?: string) {
    super(message);
    this.name = 'AppErrorException';
    this.type = type;
    this.code = code;
    this.timestamp = new Date();
    Object.setPrototypeOf(this, AppErrorException.prototype);
  }

  toJSON(): AppError {
    return {
      type: this.type,
      message: this.message,
      timestamp: this.timestamp,
      code: this.code,
    };
  }
}

/**
 * Registra errores en la consola en modo desarrollo
 * @param error - Error a registrar
 */
export const logError = (error: AppError | Error): void => {
  if (import.meta.env?.DEV || process.env.NODE_ENV === 'development') {
    console.error('[Error Handler]', {
      error,
      timestamp: new Date().toISOString(),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};