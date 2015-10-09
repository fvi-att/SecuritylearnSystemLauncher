#! /bin/sh

#RUN DATABASE CONTAINER
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin --name mariadb mariadb:latest

#RUN APP CONTAINER
docker run -itd --name main_app -p 80:80 -v /tmp/:/tmp/ -v /var/www/ --link mariadb:mariadb fviaatt/securitylearn

#docker exec $CONTROLL_CONTAINER ip addr add 172.17.0.10/16 dev eth0
docker exec -it main_app /bin/bash
