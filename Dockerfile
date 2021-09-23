# syntax=docker/dockerfile:1
FROM node:12.18.1
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install

COPY . ./
RUN npm run build


FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]