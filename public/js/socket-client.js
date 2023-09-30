
const textMensaje = document.querySelector('#textMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();



socket.on('enviar-al-clinte', (payload) => {
    console.log(payload)
})


btnEnviar.addEventListener('click', () => {
    
    const mensaje = textMensaje.value;

    const payload = {
        mensaje,
        id:'123aADSA',
        fecha:new Date().getTime()
    }

    textMensaje.value = '';

    
    // Primer parametro nombre del evento, segundo:La data, tercero:Funcion de devolucion de datos    
    socket.emit('enviar-al-servidor', payload, (data) => {
        // Data que envie para que se proceso en el servidor y me la retorne
        console.log(data)
        const p = document.createElement('p');
        p.innerText = JSON.stringify(data);
        document.body.appendChild(p);
    });
})


