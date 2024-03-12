const conexion=require('./conexion');

const getClientes=async ()=>{
    const [consulta]=await conexion.
    execute('select * from clientes');
    return consulta;
};

module.exports={ getClientes}