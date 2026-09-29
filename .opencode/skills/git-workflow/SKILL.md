---
name: Multi-Git Workflow
description: Habilidad para hacer commits estandarizados y empujar tanto a GitHub como a GitLab.
slash: true
---

# Flujo de Trabajo Git (GitHub + GitLab)

Cuando el usuario pida "guardar el proyecto", "subir cambios" o "hacer push":

1. Revisa el estado actual con `git status`.
2. Genera un commit siguiendo Conventional Commits (ej: `feat: add new button`, `fix: header padding`).
3. Ejecuta `git push all main` para enviar el código sincronizadamente a las instancias de GitHub y GitLab.
4. Recuerda al usuario que el pipeline de GitLab se disparará automáticamente.
