FROM node:16-alpine

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file proyek ke dalam container
COPY . .

# Build aplikasi React
RUN npm run build

# Expose port yang akan digunakan oleh aplikasi (default React port)
EXPOSE 3000

# Command untuk menjalankan aplikasi saat container dijalankan
CMD ["npm", "start"]
