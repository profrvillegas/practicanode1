const { Router, json } = require('express');
const consultas = require('../consultas');
const router = Router();
// ruta para acceder a todos los clientes
router.get('/', async (req, res) => {
    const consulta = await consultas.getClientes();
    return res.status(200).json(consulta);
})

// ruta para acceder al detalle de un cliente
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const consulta = await consultas.getClienteById(id);
    if (consulta.length === 0) {
        return res.status(400).json({ mensaje: "cliente no encontrado" });
    }
    return res.status(200).json(consulta);
});

// ruta para agregar un nuevo cliente
router.post('/', async (req, res) => {
    const { nombre_cliente, correo_electronico, contrasenia } = req.body;
    const consulta = await consultas.insertCliente(nombre_cliente,
        correo_electronico, contrasenia);
    return res.status(200).json(consulta);
});

module.exports = router;