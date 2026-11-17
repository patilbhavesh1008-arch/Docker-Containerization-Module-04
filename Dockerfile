FROM node:22-alpine

WORKDIR /app

ENV PORT=3000

RUN mkdir -p /app/data && chown -R node:node /app

COPY --chown=node:node server.js .

USER node

EXPOSE 3000

CMD ["node", "server.js"]
