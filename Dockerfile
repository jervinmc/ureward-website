# Stage 1: Build the Nuxt.js application
FROM node:14 AS builder

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Stage 2: Create the production image
FROM nginx

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the built Nuxt.js application from the previous stage
COPY --from=builder /usr/src/app/.nuxt /usr/share/nginx/html/_nuxt
COPY --from=builder /usr/src/app/static /usr/share/nginx/html/static

# Copy the Nginx configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will listen on (usually 80)
EXPOSE 80

# Start Nginx and keep the process running in the foreground
CMD ["nginx", "-g", "daemon off;"]