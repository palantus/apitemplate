Unfinished project. Don't use it yet :)

## Credit

API implementation from:
https://github.com/cdimascio/express-openapi-validator-example

Stucture from:
https://github.com/santiq/bulletproof-nodejs/tree/master/src

(article: https://softwareontheroad.com/ideal-nodejs-project-structure/)

## Using sample API:
New pet:
POST http://localhost:8080/api/pets?name=Simba

Get all pets:
GET http://localhost:8080/api/pets

Get specific pet:
GET http://localhost:8080/api/pets/Simba

## Sample client

There is a sample client in www that can be used at will. Remove express static route in loaders/express.js if you only want an api.