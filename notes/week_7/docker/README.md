# Installing Docker on EC2

1. Launch in EC2 instance using an Ubuntu OS
2. `sudo apt update && sudo apt upgrade -y`
3. `sudo apt install docker.io`
4. `sudo service docker start`
5. `docker --version`

# Installing Node.js

1. `curl -sL https://deb.nodesource.com/setup_20.x | sudo bash -`
2. `sudo apt -y install nodejs`

# Docker Hello World

1. `sudo docker run hello-world`