FROM node:14-slim
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node package*.json ./
RUN npm i -q
COPY --chown=node . .
RUN npm run development:build
ENV HOST=0.0.0.0 PORT=3000
EXPOSE ${PORT}
CMD ["npm", "run", "development:start"]
