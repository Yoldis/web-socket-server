const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        // this.listen();
        this.middleware();

        // Socket
        this.socket();
    }


    middleware(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    socket(){
        this.io.on("connection", socketController);

        // Enviar data a todos los que estan conectado al servidor
        // this.io.emit('enviar-al-clinte', payload);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidor levantado en el puerto', this.port);
        })
    }
}


module.exports = {
    Server
}