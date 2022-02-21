# pull official base image
FROM node:12.16.2

WORKDIR "/app"

# copy package.json
COPY package*.json ./
COPY yarn.lock ./

# copy app files
COPY . .

# install deps
RUN yarn


# build app
RUN yarn build

#expose express port
EXPOSE 8080

# start app
CMD ["node", "server.js"]
