FROM ubuntu:16.04
MAINTAINER Yan Yang "yy4jobs@gmail.com"

RUN apt-get update && apt-get install -y curl python-software-properties && su - && apt-get install sudo && curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && sudo apt-get install nodejs

EXPOSE 4200

COPY . \app

WORKDIR \app

RUN npm install -g @angular/cli@8 && npm install

CMD ng serve --host='0.0.0.0'
