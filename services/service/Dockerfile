FROM node:lts-alpine

RUN mkdir /app
COPY . /app
RUN chmod 755 /app/crontab.txt
RUN /usr/bin/crontab /app/crontab.txt
WORKDIR /app

# Install the dependenciess
ENV MONGODB_URI="mongodb://root:pass@home-assignment-db:27017/testdb?authSource=admin"
ENV API_URL="https://www.alphavantage.co/query"
ENV API_KEY="OC88HBQUW3XVKURT"
RUN yarn install
RUN yarn build

EXPOSE 8080