# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Exectute `npx install` on thye same path as of your root directory of teh downlaoded project
- Inside the `src/config` folder create new file `config.json` and then add the following pices of json

```
 {
"development": {
 "username": "your_postgres_username",
 "password": "your_postgres_password",
 "database": "your_postgres_database",
 "host": "localhost",
 "dialect": "postgres"
},
"test": {
 "username": "your_postgres_username",
 "password": "your_postgres_password",
 "database": "your_postgres_database",
 "host": "localhost",
 "dialect": "postgres"
},
"production": {
 "username": "your_postgres_username",
 "password": "your_postgres_password",
 "database": "your_postgres_database",
 "host": "localhost",
 "dialect": "postgres"
}
}

```

- Once you've added your db config listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

## DB Design

- Airplane Table
- Flight
- Airport
- City
- A flight belongs to an airplane but one airplace can be used in multiple flights
- A city has many airports but one airport belongs to a city
- one airport can have many flights, but a flight belongs to one airport
