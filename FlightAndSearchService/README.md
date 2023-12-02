This is a base node js project template, which anyone can use as it has been prepared, by keeping come of the most important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside this will not incloude any kind of tests. (You midht want to make separate tests folder)

Lets take a look inside the `src` folder

-> `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. for example: setting up `dotenv` so that we can use the one more example can be to setup you logging library that can help you to prepare meaningfull logs, fo configuration for this library should also be one here.

-> `middlewares` -> they are just going to intercept the incoming requrests where we can write our validators, authencticators etc.

-> `controllers` -> they are kind of the last middlwares as port them you call you layer to execute the budiness logic. In controllers we just receuve the incoming requests and data and then pass it to the business layer, and once business layer returns an output we structure the API responce in controllers and send the output.

-> `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

-> `services` -> contains the business logic and interacts with repositories for the data from the database

-> `utils` -> contains helper methods, error classes etc.

### Setup the project

-> download this template from github and open it in your favourite text editor
-> Go inside the folder path and execute the follwing command

```
npm install
```

-> In the root directory create a `.env` file and the follwing env variables

```
PORT=> <PORT number of your coice>

ex: PORT = 3000
```

-> to run the server exceute

```
npm start
```
