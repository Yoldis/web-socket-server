

const socketController = (socket) => {

    console.log('Cliente Conectado');

    socket.on('disconnect', () => {
        console.log('Cliente desconectado')
    })

    socket.on('enviar-al-servidor', (payload, callback) => {
        
        // Enviar data al que solo envio el mensaje
        callback(payload);

        // Enviar data a todos los que estan conectado al servidor menos al que envio el mensaje
        socket.broadcast.emit('enviar-al-clinte', {...payload, lala:'Hola'});

        // Enviar data al que solo envio el mensaje
        // socket.emit('enviar-al-clinte', payload);
    })
}


module.exports = {
    socketController
}