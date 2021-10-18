//Hapi framework
const Hapi = require('hapi');

//Address and port
const host = '0.0.0.0';
const port = 8080;

//Create server
const server = Hapi.Server({
    host: host,
    port: port
});

//Routes
require('./routes/routes')(server);

//Start server
const init = async () => {
    await server.start();
    console.log("Server up! " + host + " Port: " + port);
}

//Start App
init();