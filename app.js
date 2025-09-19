let instance_message = process.env.VALUE_LINK;
const port = process.env.PORT || 3000;

const http = require('http');
const server = http.createServer((req, res) => {
    res.end(`Mensaje mediante la url ${instance_message}`);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

/* DOCKER COMPOSE -> CREAR UNA NUEVA APLICACION -> SUBIR IMAGEN -> PONER NOMBRE A LA APLICACION -> SELECCIONAR IMAGEN -> CONFIGURAR PUERTO 3000 -> CREAR APLICACION
UTILIZAR TRAFIC
Y UTILIZAR 2 INSTANCIAS DE LA APLICACION Y DEVOLVER AL USUARIO 

PASAR COMO VARIABLE EL MENSAJE 


#1 SEGURIDAD ORGANIZAR LA VPN
#2 RP DE LA COMPAÑIA DOKERIZAR -> PASAR A KUBERNETES */