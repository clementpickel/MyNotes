# Use the node image as the base image
FROM node:18.17.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies, including the Angular CLI
RUN npm install -g @angular/cli && npm install

# Copy the rest of the application code
COPY . .

# Expose port 4200
EXPOSE 4200

# Run npm start with host 0.0.0.0
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
