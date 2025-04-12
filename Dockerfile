# Etapa 1: Construcción
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Vite o Vue CLI
RUN npm run build

# Etapa 2: Producción con Nginx
FROM nginx:stable-alpine

# Copia los archivos generados al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Opcional: reemplazar archivo de configuración default si lo necesitas
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

