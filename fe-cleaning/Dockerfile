# 1. ใช้ Node image
FROM node:20-alpine

# 2. ตั้ง working directory
WORKDIR /app

# 3. copy package files
COPY package.json package-lock.json ./

# 4. install dependencies
RUN npm install

# 5. copy source code ทั้งหมด
COPY . .

# 6. build project
RUN npm run build

# 7. เปิด port
EXPOSE 3000

# 8. run app
CMD ["npm", "start"]