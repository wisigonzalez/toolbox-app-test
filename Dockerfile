# Selecciona la imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /toolbox-app-test

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Define el comando para iniciar la aplicación
CMD ["npm", "start"]