# ---- BUILD ----
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- RUN ----
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=build /app ./

EXPOSE 8080
ENV PORT=8080
ENV HOST=0.0.0.0

CMD ["npm", "run", "start"]
