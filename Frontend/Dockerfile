FROM node:20-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 80
CMD ["npx", "http-server", "dist", "-p", "80"]