# pull official base image
FROM node:12.16.2

# copy package.json
COPY package.json ./
COPY yarn.lock ./

# install deps
RUN npm install --silent

# copy app files
COPY . .

# build app
RUN npm run build

#expose express port
EXPOSE 8080

# start app
CMD ["node", "server.js"]
