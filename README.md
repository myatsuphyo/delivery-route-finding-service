# Eko delivery service

The purpose of this source code is to build the system that provide finding routes service.

Currently, the following routes are used as default routes to use the service. 
##### A->B, A->C, A->D, B->E, C->D, C->F, D->E, E->B, E->A, F->D

### Installation

```sh
$ git clone git@github.com:myatsuphyo/delivery-route-finding-service.git
$ cd delivery-route-finding-service
$ npm install
```
### Getting started

To use as a console app, please run this command.
```sh
    npm run console
```

To use as a HTTP server: 
```sh
    npm run api
```
The app will be running at port 8080 and you can access it from http://localhost:8080

Example HTTP routes to test API:
```sh
    http://localhost:8080/api/cost/AD
    http://localhost:8080/api/cost/EAD
    http://localhost:8080/api/cheapest/E/E
    http://localhost:8080/api/cheapest/E/D
```

### Features

- Case 1 : finding cost of given route (by simple includes() search)
- Case 2 : finding possible routes by given conditions (unfinished currently solving, by DFS algorithm)
- Case 3 : finding cost of cheapest route (by Dijkstra's algorithm)

### Testing

Mocha.js is used for testing

To test case 1 (finding cost of given route): 
```sh
$ npm run test-case1
```
To test case 2 (finding possible routes by given conditions): 
```sh
$ npm run test-case2
```
To test case 3 (finding cost of cheapest route): 
```sh
$ npm run test-case3
```

