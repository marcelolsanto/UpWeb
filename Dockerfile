# Use a imagem base oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Defina variáveis de ambiente
ENV EMAIL_USER=marcelolsantos30@gmail.com
ENV EMAIL_PASS=jjyyxewiztjuptko
ENV EMAIL_RECEIVER=fonte-de-luz@hotmail.com

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]