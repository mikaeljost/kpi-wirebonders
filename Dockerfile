FROM nodered/node-red:latest
COPY package.json .
COPY settings.js /data/settings.js
RUN npm install
