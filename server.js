const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection',(socket)=>{

    const idHandShake = socket.id;
    const { nameRoom } = socket.idHandShake.query;
    console.log(`Dispositivo: ${idHandShake}`);



})

server.listen(5000,()=>{
    console.log(`>> Socket listo y escuchando en el puerto: 5000`)
})