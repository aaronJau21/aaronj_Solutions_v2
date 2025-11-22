FROM node:20-alpine AS base

WORKDIR /app

# Copiar configs
COPY package.json ./

# Instalar dependencias
RUN npm install --production=false

# Copiar proyecto completo
COPY . .

RUN npx prisma generate

RUN npm run build

# ---- Runner Stage ----
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=base /app/node_modules ./node_modules

COPY --from=base /app/dist ./dist

COPY --from=base /app/prisma ./prisma

EXPOSE 3000

CMD ["node", "dist/main.js"]
