# Mi Sistema Unificado (OpenCode + Open-Design + GitHub + GitLab)

Este repositorio es la base del ecosistema automatizado.

## Arquitectura
- **Open-Design**: Usado para generar código UI a partir de prompts (se ejecuta en tu máquina local usando el plugin de Codex/OpenCode).
- **OpenCode**: Utiliza los `skills` locales definidos en la carpeta `.opencode/skills` para estandarizar commits y sincronizar diseños.
- **GitHub**: Repositorio principal de código fuente y colaboración.
- **GitLab**: Espejo del código y motor de Integración Continua (CI/CD).

## Cómo empujar a ambos repositorios a la vez
Este repositorio está configurado con un remoto "all". Para subir el código usa:
`git push all main`
