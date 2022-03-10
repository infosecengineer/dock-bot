# dock-bot
discord bot in docker

Basic functionality with ping-pong response so far

### To create and run the docker image and container

docker build -t dockbot --network=<your-network> .
docker run -dit --network=<your-network> --ip=<select-ip> --name discbot dockbot:latest


  
  
  
Resources used to create this:

https://hub.docker.com/_/node

https://programmingfire.com/create-docker-image-for-nodejs

https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/

