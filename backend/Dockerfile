FROM node 

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install 

COPY . .

EXPOSE $PORT

RUN yarn build
RUN npm i -g pm2

# CMD ["yarn", "start:dev"]
CMD ["pm2-runtime", "dist/main.js", "--name", "file-coin"]