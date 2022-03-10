# dock-bot
basic discord bot in docker

Basic functionality with ping-pong response so far

Added in "extra" functionality using a separate file to house additional functions

Bot responds to:
!ping
!pang 

### To create and run the docker image and container

git pull infosecengineer/dock-bot
cd dock-bot
docker build -t dockbot --network=<your-network> .
docker run -dit --network=<your-network> --ip=<select-ip> --name discbot dockbot:latest


  
  
Resources used to create this:

https://hub.docker.com/_/node

https://programmingfire.com/create-docker-image-for-nodejs

https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/

