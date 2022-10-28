FROM node:18

# Working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install files
RUN npm install

# Copy files
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 1337

CMD [ "node", "dist/index.js" ]