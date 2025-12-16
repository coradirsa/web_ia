# ✅ IMAGEN ACTUALIZADA Y ESPECÍFICA (Alpine para menor superficie de ataque)
FROM node:20.18.0-alpine AS base

# ✅ MULTI-STAGE BUILD - Reduce tamaño final de imagen
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force

FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# ✅ BUILD SIN SECRETOS - Se inyectan en runtime
RUN npm run build

# ✅ IMAGEN FINAL MINIMALISTA
FROM base AS runner
WORKDIR /app

# ✅ USUARIO NO-ROOT (CRÍTICO)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar dependencias de producción
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./

# ✅ CREAR DIRECTORIO DE UPLOADS CON PERMISOS
RUN mkdir -p /app/uploads && \
    chown -R nextjs:nodejs /app/uploads

# ✅ CAMBIAR A USUARIO NO-ROOT
USER nextjs

EXPOSE 6112

# ✅ HEALTHCHECK PARA DETECCIÓN DE FALLOS
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:6112/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["npm", "start"]
