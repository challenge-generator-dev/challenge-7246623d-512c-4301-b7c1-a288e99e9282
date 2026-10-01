# Desarrollo de una aplicación React con TypeScript

El equipo de desarrollo de una empresa fintech necesita crear una aplicación React que integre TypeScript, componentes funcionales y hooks. La aplicación debe manejar la visualización de una lista de productos financieros, incluyendo su nombre, precio y stock. Los productos se obtienen de un servicio externo que proporciona datos en formato JSON. El objetivo es construir una interfaz de usuario que muestre esta información de manera clara y accesible.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | TypeScript React |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del entorno y obtención de datos

**Objetivo:** Configurar el entorno de desarrollo y obtener datos del servicio externo

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar un proyecto React con TypeScript.
- Crear un servicio que obtenga la lista de productos financieros desde un endpoint proporcionado.
- Manejar posibles errores de red y mostrar un mensaje de error al usuario si la obtención de datos falla.

**Entregable:** Entorno de desarrollo configurado con React y TypeScript, y servicio que obtiene y maneja datos del endpoint.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar diferentes estados de carga y error.
- Piensa en la estructura de los datos que esperas recibir y cómo validarlos.

</details>

### Fase 2: Creación de componentes funcionales

**Objetivo:** Crear componentes funcionales para mostrar la lista de productos

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear un componente funcional para mostrar cada producto.
- Utilizar hooks para gestionar el estado y efectos secundarios.
- Asegurar que los componentes sean reutilizables y mantengan una interfaz limpia.

**Entregable:** Componentes funcionales creados y renderizados en la aplicación.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo pasar propiedades a los componentes y gestionar su estado.
- Piensa en la reutilización de componentes y en cómo mantener una estructura de código limpia.

</details>

### Fase 3: Integración y visualización de la lista de productos

**Objetivo:** Integrar y visualizar la lista de productos en la aplicación

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Integrar los componentes creados en la fase anterior para mostrar la lista completa de productos.
- Asegurar que la aplicación maneje correctamente la carga y visualización de datos.
- Implementar estilos básicos para mejorar la experiencia del usuario.

**Entregable:** Aplicación completa que muestra la lista de productos con estilos básicos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar la carga asincrónica de datos y mostrar un indicador de carga al usuario.
- Piensa en la accesibilidad y usabilidad de la interfaz de usuario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente funcional en React y por qué se usa?
- **paraQueSirve**: ¿Para qué sirven los hooks en React y cómo los usas en este reto?
- **comoSeUsa**: ¿Cómo usas TypeScript en React para tipar tus componentes y servicios?
- **erroresComunes**: ¿Cuáles son los errores comunes al obtener datos de un servicio externo y cómo los manejas en este reto?

## Criterios de Evaluacion

- Configurar un proyecto React con TypeScript.
- Crear un servicio que obtenga y maneje datos de un endpoint externo.
- Crear y utilizar componentes funcionales y hooks en React.
- Implementar estilos básicos para mejorar la experiencia del usuario.
- Manejar correctamente la carga y visualización de datos.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
