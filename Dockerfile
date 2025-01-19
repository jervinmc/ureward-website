# Use Node.js base image
FROM node:16 AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies (and create package-lock.json if missing)
RUN npm install

# Install production dependencies using npm ci
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Expose the port for Nuxt.js
EXPOSE 3000

CMD ["npm", "run", "start"]
