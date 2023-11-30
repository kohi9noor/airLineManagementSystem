#### first Add Your database details in the config/

`npx suquelize-cli`

onfig.json file.

{
"development": {
"username": "root",
"password": null,
"database": "database_development",
"host": "127.0.0.1",
"dialect": "mysql"
},
"test": {
"username": "root",
"password": null,
"database": "database_test",
"host": "127.0.0.1",
"dialect": "mysql"
},
"production": {
"username": "root",
"password": null,
"database": "database_production",
"host": "127.0.0.1",
"dialect": "mysql"
}
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`

```

## DB Design

- Airplane Table
- Flight
- City
- airPort

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one a airport
