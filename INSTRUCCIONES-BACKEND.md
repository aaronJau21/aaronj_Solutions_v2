# Instrucciones para Corregir el Dockerfile del Backend

## Problema Actual

Tu Dockerfile del backend (`api-aaronjSolutions`) está intentando ejecutar `pnpm prisma generate` después de instalar solo dependencias de producción (`--prod`), pero Prisma CLI está en devDependencies y no está disponible.

## Solución Rápida

### Paso 1: Copiar el Dockerfile Corregido

1. Abre el archivo `Dockerfile-BACKEND-COMPLETO` en este repositorio
2. Copia todo su contenido
3. Ve a tu repositorio del backend: `github.com/aaronJau21/api-aaronjSolutions`
4. Reemplaza el contenido del `Dockerfile` con el contenido copiado

### Paso 2: Ajustar Según Tu Proyecto

Busca las líneas marcadas con `# AJUSTAR` y modifícalas según tu proyecto:

#### 1. Comando de Build (línea ~50)
```dockerfile
# Si tienes un script "build" en package.json:
RUN pnpm build

# Si compilas TypeScript manualmente:
# RUN pnpm tsc

# Si no tienes build, comenta esta línea:
# RUN pnpm build
```

#### 2. Archivos a Copiar (línea ~75)
```dockerfile
# Si compilas TypeScript a dist/:
COPY --from=builder /app/dist ./dist

# Si usas JavaScript directamente en src/:
# COPY --from=builder /app/src ./src

# Si tienes otros archivos necesarios:
# COPY --from=builder /app/public ./public
```

#### 3. Comando de Inicio (línea ~95)
```dockerfile
# Si compilas TypeScript:
CMD ["node", "dist/index.js"]

# Si usas JavaScript directamente:
# CMD ["node", "src/index.js"]

# Si tienes un script start en package.json:
# CMD ["pnpm", "start"]
```

### Paso 3: Verificar Estructura

Asegúrate de que tu proyecto tenga:
- ✅ `prisma/` directorio con el schema
- ✅ `package.json` con las dependencias correctas
- ✅ `pnpm-lock.yaml` actualizado

### Paso 4: Commit y Push

```bash
git add Dockerfile
git commit -m "fix: corregir Dockerfile para Prisma"
git push
```

### Paso 5: Redesplegar

Vuelve a intentar el deploy en Dokploy.

## ¿Cómo Funciona la Solución?

1. **Stage `deps`**: Instala TODAS las dependencias (incluyendo devDependencies) para tener Prisma CLI disponible
2. **Stage `builder`**: Genera el cliente de Prisma usando Prisma CLI y construye la aplicación
3. **Stage `production`**: 
   - Instala solo dependencias de producción (imagen más pequeña)
   - Copia el cliente Prisma generado desde builder
   - El cliente generado funciona sin necesidad de Prisma CLI

## Verificación

Si el build funciona correctamente, deberías ver:
- ✅ `pnpm install --frozen-lockfile` (sin --prod)
- ✅ `pnpm prisma generate` (ejecutándose exitosamente)
- ✅ `pnpm install --prod --frozen-lockfile` (solo en producción)
- ✅ Build completado sin errores

## Troubleshooting

### Error: "Cannot find module"
- Verifica que estés copiando los archivos correctos en el stage production
- Asegúrate de que el comando CMD apunte al archivo correcto

### Error: "Prisma Client not found"
- Verifica que se estén copiando los directorios `.prisma` y `@prisma`
- Asegúrate de que `pnpm prisma generate` se ejecute en el stage builder

### Error: "Build script not found"
- Comenta la línea `RUN pnpm build` si no tienes script de build
- O ajusta el comando según tu script en package.json

