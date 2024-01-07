//import json-server
const jsonServer = require('json-server')

//create a server application using jsonServer
const docServer = jsonServer.create()

//setup path for db.json
const router = jsonServer.router('db.json')

//return a middleware used by json server
const middleware = jsonServer.defaults()

//setup port
const port = 3001

//use in server
docServer.use(middleware)
docServer.use(router)

//to run port
docServer.listen(port,()=>{
    console.log('Doc server listening on the port '+port);
})