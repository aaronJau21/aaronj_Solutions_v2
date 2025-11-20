# Dockerfile para Backend con Prisma

Este Dockerfile está diseñado para proyectos backend que usan Prisma con pnpm.

## Problema Resuelto

El error `Command "prisma" not found` ocurre porque:
- Se usa `pnpm install --prod` que NO instala devDependencies
- Prisma CLI normalmente está en devDependencies
- Se intenta ejecutar `pnpm prisma generate` sin tener Prisma CLI instalado

## Solución

El Dockerfile usa un multi-stage build:

1. **deps**: Instala TODAS las dependencias (incluyendo devDependencies para Prisma CLI)
2. **builder**: Genera el cliente de Prisma y construye la aplicación
3. **production**: Instala solo dependencias de producción + copia el cliente Prisma generado

## Cómo Usar

1. Copia `Dockerfile.backend-prisma` a tu repositorio del backend como `Dockerfile`
2. Ajusta las siguientes líneas según tu proyecto:

```dockerfile
# Línea ~50: Ajusta el comando de build
RUN pnpm build  # o pnpm build:prod, tsc, etc.

# Línea ~70: Ajusta qué archivos copiar
COPY --from=builder /app/dist ./dist  # o /app/src, etc.

# Línea ~85: Ajusta el comando de inicio
CMD ["node", "dist/index.js"]  # o ["pnpm", "start"]
```

## Estructura Esperada

El Dockerfile asume:
- `prisma/` directorio con el schema
- `package.json` con scripts de build
- Estructura de salida según tu configuración (dist/, src/, etc.)

## Variables de Entorno

Agrega tus variables de entorno en el stage `production`:

```dockerfile
ENV DATABASE_URL=${DATABASE_URL}
ENV JWT_SECRET=${JWT_SECRET}
# etc.
```

O usa docker-compose para pasarlas:

```yaml
environment:
  - DATABASE_URL=${DATABASE_URL}
```

