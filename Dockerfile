# base image to use
FROM node:20

# set the base directory for the rest of the dockerfile
WORKDIR /app

# install & cache dependencies first
COPY package*.json ./
RUN npm install
# dependencies cached as layer

# copy all files except stated in .dockerignore
COPY . .

# port forwarding to expose to outside container, but need run 8081:5173 to expose 8081 to outside
EXPOSE 5173

# only one in each dockerfile
# in exec form
CMD ["npm", "start"]