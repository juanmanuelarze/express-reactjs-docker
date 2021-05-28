Asure you have docker runing in your local machine and execute the following command 

$ docker-compose up --build

Asure mysql container been ready before backend container otherwise nodejs backend will cant connect to mysql. Wait to mysql container are ready and execute the previous command again.

Open a web browser and go to http://localhost:3001/

How to run tests:

$ docker ps

Copy truenorthtest_backend CONTAINER_ID

$ docker exec $DOCKER_CONTAINER_ID npm run test

Replace $DOCKER_CONTAINER_ID with your ID and execute.


