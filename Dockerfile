FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Nuxt.js port (default 3000)
EXPOSE 3000

# Command to run Nuxt.js
CMD ["npm", "run", "start"]
