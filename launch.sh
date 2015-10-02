#! /bin/sh

#this is installing script use ./xxx.sh or nohup xxx.sh &

#set trap
trap 'install finish' 0
trap 'install interapted' 2

#install essential-tools

apt-get update
apt-get install -y build-essential emacs24 vim
apt-get install -y git curl


#install docker
curl -sSL https://get.docker.com/ | sh

#docker pull baseimages
#docker pull fviaatt/securitylearn
#docker run -i -t -p 2222:22 fviaatt/securitylearn /bin/bash

#build Docker container
mkdir -p ~/work/controll
cp Dockerfile ~/work/controll/Dockerfile
cp 000-default.conf ~/work/controll/000-default.conf
cd ~/work/controll

#wget https://gist.githubusercontent.com/fvi-att/65854df646be14c29ffa/raw/531f24982f060c267081e64c1d46058c72208385/Dockerfile -O ~/work/controll/Dockerfile

docker build -t app .


#container launch settings
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 2222 -j ACCEPT

#RUN DATABASE CONTAINER
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin --name mariadb mariadb:latest

#RUN APP CONTAINER
docker run -itd --name main_app -p 2222:22 -p 80:80 -v /tmp/:/tmp/ -v /var/www/ --link mariadb:mariadb app

#docker exec $CONTROLL_CONTAINER ip addr add 172.17.0.10/16 dev eth0
docker exec -it main_app /bin/bash

#end trap
trap 0
trap 2


# == END ==


