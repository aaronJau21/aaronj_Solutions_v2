# ---- Base Stage ----
    FROM node:20-alpine AS base

    WORKDIR /app
    
    # Copiar configs
    COPY package.json package-lock.json ./
    
    # Instalar dependencias
    RUN npm install --production=false
    
    # Copiar proyecto completo
    COPY . .
    
    # Generar Prisma Client
    RUN npx prisma generate
    
    # Compilar NestJS
    RUN npm run build
    
    # ---- Runner Stage ----
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Copiar solo dependencias (sin devDependencies)
    COPY --from=base /app/node_modules ./node_modules
    
    # Copiar dist compilado
    COPY --from=base /app/dist ./dist
    
    # Copiar prisma
    COPY --from=base /app/prisma ./prisma
    
    EXPOSE 3000
    
    CMD ["node", "dist/main.js"]
    