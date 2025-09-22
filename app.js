const express = require('express');
const app = express(); 

app.get('/', (req, res) => { 
    res.send(`<form action ="/message" method="post">
        <input type="text" name="value" placeholder="variable a enviar"/>
        <button type="submit">Enviar variable</button>
        </form>`);
});


app.post('/message', (req, res) => {
    const variable = req.body.value;
    res.send(`La variable enviada es: ${variable}`);
});


app.listen(port, () => {
    console.log(`Devolviendo al puerto ${port}`);
});






/// TRABAJO
/* DOCKER COMPOSE -> CREAR UNA NUEVA APLICACION -> SUBIR IMAGEN -> PONER NOMBRE A LA APLICACION -> SELECCIONAR IMAGEN -> CONFIGURAR PUERTO 3000 -> CREAR APLICACION
UTILIZAR TRAFIC
Y UTILIZAR 2 INSTANCIAS DE LA APLICACION Y DEVOLVER AL USUARIO 

PASAR COMO VARIABLE EL MENSAJE 


#1 SEGURIDAD ORGANIZAR LA VPN
#2 RP DE LA COMPAÑIA DOKERIZAR -> PASAR A KUBERNETES */