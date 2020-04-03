## Cryptolytics :: Backend

> ### How to start backend server on your PC

- Setup and run mongo instance; there are two possible options here:

	**Variant 1**

	- Install mongo to your PC according to official docs ([install link](https://docs.mongodb.com/manual/administration/install-community/))
	- Verify if `mongod` service is started. For example, there are commands to manage the service status on Ubuntu:
	```
	sudo systemctl status mongod
	sudo systemctl start mongod
	sudo systemctl restart mongod
	sudo systemctl stop mongod
	```  
	- By default, mongo is listed on port 27017
	
	**Variant 2**

	- Install docker & docker-compose on youp PC (links to installation guide can be found below)
	- Verify if `docker` service is started. For example, there are commands to manage the service status on Ubuntu:
	```
	sudo systemctl status docker
	sudo systemctl start docker
	sudo systemctl restart docker
	sudo systemctl stop docker
	``` 
	- Later, mongo will be launched in a container

- Clone project to a local folder

	`git clone https://github.com/midmihua/cryptolytics.git`

- Go to `/backend` folder

- Install npm dependencies

	```
	npm install
	```

- If **Variant 1** is chosen to setup mongo instance, execute the following steps:

	- Run commands

		```
		chmod +x mongo-init.sh
		./mongo-init.sh
		```

	- Run command

		```
		npm run dev
		```

	- As a result, you should see logs in your terminal

		```
		...
		Listening on 3000
		ENV: local
		MONGO: mongodb://admin:secret@localhost:27017/cryptolytics
		```

- If **Variant 2** is chosen to setup docker & docker-compose, execute the following steps:

	- Run command

		```
		npm run up
		```
	
	- As a result, you should see logs in your terminal

		```
		...
		Listening on 3000
		ENV: local
		MONGO: mongodb://admin:secret@localhost:27017/cryptolytics
		```
	
	- **If** some errors occurred while execution previous step, run manually the commands from the script above

		```
		mkdir -p data
		sudo docker-compose up -d
		```
	- As a result, you should see logs in your terminal

		```
		...
		Listening on 3000
		ENV: local
		MONGO: mongodb://admin:secret@localhost:27017/cryptolytics
		```


> ### [Curl docs](https://curl.haxx.se/docs/httpscripting.html)

```sh
curl localhost:3000/actuator/info
curl localhost:3000/actuator/metrics
curl localhost:3000/actuator/health
```

```sh
curl -v -X POST localhost:3000/api/signup -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "username":"test", "password":"secret"}'
```

```sh
curl -v -X POST localhost:3000/api/login -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "password":"secret"}'
```

```sh
curl -v localhost:3000/api/me -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyMkB0ZXN0LmRiIiwidXNlcklkIjoiNWU0YWIwMTNmYjAzMmI0NzEyOWViMzkzIiwiaWF0IjoxNTgxOTU0MjE2LCJleHAiOjE1ODE5NTc4MTZ9.u7tKe1vddkuPmURmF8Jgr6duX2wkuoCWoPUQMDgj5Ms'
```

> ### [Docker docs](https://docs.docker.com/)

- [docker installation guide](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [docker-compose installation guide](https://docs.docker.com/compose/install/)

- How to connect to a container:

```sh
sudo docker exec -it backend_db_1 mongo -u admin -p secret cryptolytics
```

> ### [Mongo docs](https://docs.mongodb.com/manual/)

```sh
> db
test-database

> use test-database
switched to db test-database

> show collections
test-collection

> db.test-collection.find().pretty()
{
	"_id" : ObjectId("5e49a489e157fc74dbee014b"),
	"username" : "test",
	"email" : "test@gmail.com",
	"password" : "$2a$12$rHDpKlywuTgpAE60Yus8sOkBUQlaocjrGtd4ZxY4gI.9pdMeIn//G",
	"createdAt" : ISODate("2020-02-16T20:22:33.778Z"),
	"updatedAt" : ISODate("2020-02-16T20:22:33.778Z"),
	"__v" : 0
}
> 
```

### Useful commands

#### Kill active process on a port

```sh
sudo kill -9 $(sudo lsof -t -i:3000)
```

#### Git

```sh
git pull --rebase origin develop
```

```sh
git push origin branch_name
```
