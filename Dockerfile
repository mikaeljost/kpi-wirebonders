FROM nodered/node-red:latest

COPY settings.js /data/settings.js

RUN npm install --ignore-scripts --no-update-notifier --no-fund --only=production \
    @flowfuse/node-red-dashboard \
    node-red-contrib-spreadsheet-in \
    node-red-contrib-postgresql
