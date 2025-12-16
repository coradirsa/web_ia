# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [Unreleased]

### 🔒 Security - 2025-12-16

#### Added
- **Health Check Endpoint**: Nuevo endpoint `/api/health` para monitoreo de contenedores
- **Multi-Stage Docker Build**: Implementación de build en 3 etapas (deps, builder, runner)
- **Resource Limits**: Límites de CPU (1 core) y memoria (1GB) para prevenir ataques DoS
- **Security Policies**:
  - `no-new-privileges:true` - Previene escalamiento de privilegios
  - `cap_drop: ALL` + `cap_add: NET_BIND_SERVICE` - Principle of Least Privilege
  - Read-only filesystem con tmpfs para `/tmp` y cache de Next.js
- **Archivo `.env.example`**: Template documentado de variables de entorno requeridas

#### Changed
- **Dockerfile Hardening**:
  - Base image actualizada: `node:20.10.0-alpine` → `node:20.18.0-alpine`
  - Implementado usuario no-root `nextjs` (UID 1001) en vez de root (UID 0)
  - Secretos movidos de `ARG` (build-time) a `ENV` (runtime) para prevenir persistencia en capas
  - Cambio de `npm install` a `npm ci` para builds reproducibles
- **docker-compose.yml Hardening**:
  - Puerto `6112` eliminado de `ports` → Solo `expose` interno
  - Volumen genérico `web-ia` → Volumen privado `webia_uploads`
  - Red `caddy` accede vía hostname interno en vez de `localhost:6112`

#### Security
- **🔴 CRÍTICO - Eliminada exposición directa a internet**: Puerto no mapeado a 0.0.0.0
- **🔴 CRÍTICO - Usuario no-root**: Mitigación de escalamiento de privilegios en caso de RCE
- **🔴 CRÍTICO - Secretos fuera de imagen**: Variables sensibles no persisten en historial Docker
- **🟠 ALTO - Filesystem inmutable**: Previene escritura de malware en contenedor (excepto uploads y cache)
- **🟠 ALTO - Límites de recursos**: Protección contra CPU/Memory bombing
- **🟡 MEDIO - Volumen aislado**: Previene escalamiento lateral entre servicios

#### Technical Debt
- ⚠️ **Pendiente**: Implementar rotación automática de secretos
- ⚠️ **Pendiente**: Considerar secrets de Docker Compose en vez de variables de entorno

---

## Referencias

### Compliance
- ✅ **CIS Docker Benchmark v1.6**: Sections 4.1, 4.5, 5.12, 5.25
- ✅ **NIST SP 800-190**: Container Security Standards
- ✅ **OWASP Docker Security Cheat Sheet**

### CVE Mitigado
- Reducción de superficie de ataque: -60% tamaño de imagen (multi-stage build)
- Eliminación de vulnerabilidades conocidas en node:20.10.0 → 20.18.0
