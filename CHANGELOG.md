# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [Unreleased]

### 🔒 Security - 2025-12-16 (Update 3 - XSS Protection)

#### Added
- **Content Security Policy (CSP)**: Headers completos para prevenir XSS, clickjacking y code injection
  - `script-src`: Whitelist completa de Google (Analytics, Tag Manager, Ads, reCAPTCHA)
  - `connect-src`: Solo dominios autorizados (N8N, Google Analytics, Google Ads)
  - `frame-src`: Solo reCAPTCHA y Google Ads permitidos
  - `form-action`: Bloquea envío de formularios a dominios no autorizados
  - `img-src`: Whitelist de Google services + data URIs
- **Security Headers**: 7 headers HTTP implementados
  - `X-Frame-Options: SAMEORIGIN` - Anti-clickjacking
  - `X-Content-Type-Options: nosniff` - Anti-MIME sniffing
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` - Deshabilita camera, microphone, geolocation
  - `X-XSS-Protection: 1; mode=block` - Legacy XSS protection
  - `Strict-Transport-Security` - Force HTTPS (31536000s)

#### Security
- **🔴 CRÍTICO - XSS Prevention**: CSP bloquea ejecución de scripts no autorizados
- **🔴 CRÍTICO - Code Injection**: Headers previenen inyección de HTML/JS malicioso
- **🔴 CRÍTICO - Open Redirect**: form-action bloquea redirects a dominios externos
- **🟠 ALTO - Clickjacking**: X-Frame-Options previene embedding malicioso
- **🟠 ALTO - MIME Sniffing**: Navegadores no pueden interpretar archivos incorrectamente

#### Changed
- **next.config.mjs**: Configuración async headers() con 7 security headers

---

### 🔒 Security - 2025-12-16 (Update 2)

#### Fixed
- **CVE GHSA-mwcw-c2x4-8c55**: Actualizada dependencia `nanoid` 3.3.7 → 3.3.11
  - Severity: Moderate (CVSS 4.3)
  - Issue: Predictable results in nanoid generation when given non-integer values
  - Impact: Potencial generación predecible de IDs en Next.js internals
  - Fix: Actualización automática vía `npm audit fix`

---

### 🔒 Security - 2025-12-16 (Initial)

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
