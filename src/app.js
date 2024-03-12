const express=require('express');
const clientes=require('./rutas/clientes');

const app=express();

app.use(express.json());
app.use('/clientes',clientes);

app.listen(3302,()=>{
    console.log('Servidor ejecutandose en el puerto 3302 ');
})