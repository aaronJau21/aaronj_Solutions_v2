# Dockerfile para Next.js 16 con pnpm
# Multi-stage build para optimizar el tamaño de la imagen

# Stage 1: Dependencies
FROM node:20-alpine AS base

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Stage 2: Install dependencies
FROM base AS deps

# Instalar dependencias sin ejecutar scripts postinstall
# Esto evita errores con scripts que no son necesarios (como Prisma)
# Next.js manejará las dependencias nativas durante el build si es necesario
RUN pnpm install --frozen-lockfile --ignore-scripts

# Stage 3: Build
FROM base AS builder

# Copiar dependencias desde el stage anterior
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Variables de entorno para el build (ajusta según tus necesidades)
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Construir la aplicación
# Next.js build manejará las dependencias necesarias
RUN pnpm build

# Stage 4: Runner
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios desde el builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar propietario de los archivos
RUN chown -R nextjs:nodejs /app

# Cambiar al usuario no-root
USER nextjs

# Exponer puerto
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para iniciar la aplicación
CMD ["node", "server.js"]

