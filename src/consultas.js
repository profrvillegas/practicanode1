const conexion = require('./conexion');

const getClientes = async () => {
    const [consulta] = await conexion.
        execute('select * from clientes');
    return consulta;
};

// metodo para buscar un cliente por id
const getClienteById = async (id) => {
    const [consulta] = await conexion.execute('SELECT * FROM clientes WHERE id_cliente=?', [id]);
    return consulta;
}

// metodo para insertar nuevos clientes
const insertCliente = async (nombre_cliente, correo_electronico, contrasenia) => {
    const [consulta] = await conexion.execute('INSERT INTO clientes(nombre_cliente,correo_electronico,contrasenia) VALUES(?,?,?)',
        [nombre_cliente, correo_electronico, contrasenia]);  
    return consulta;
}

module.exports = { getClientes, getClienteById, insertCliente }