FROM node:18

# Working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install files
RUN npm install

# Copy files
COPY . .

# Add arguments
ARG TOKEN=TOKEN
ARG TOKENTEST=TOKENTEST
ARG GUILDID=GUILDID
ARG APEXMAPTOKEN=APEXMAPTOKEN
ARG DATABASETOKEN=DATABASETOKEN
ARG DOCKER_USERNAME=DOCKER_USERNAME
ARG DOCKER_REPO=DOCKER_REPO
ARG DOCKER_TOKEN=DOCKER_TOKEN

# Add environment variables
ENV TOKEN=$TOKEN
ENV TOKENTEST=$TOKENTEST
ENV GUILDID=$GUILDID
ENV APEXMAPTOKEN=$APEXMAPTOKEN
ENV DATABASETOKEN=$DATABASETOKEN
ENV DOCKER_USERNAME=$DOCKER_USERNAME
ENV DOCKER_REPO=$DOCKER_REPO
ENV DOCKER_TOKEN=$DOCKER_TOKEN

# Build
RUN npm run build

# Expose port
EXPOSE 1337

CMD [ "node", "dist/index.js" ]