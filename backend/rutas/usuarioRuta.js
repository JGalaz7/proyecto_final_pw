const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/usuarioControlador');

// Ruta para agregar un nuevo usuario
router.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body; // Suponiendo que los datos del nuevo usuario se envían en el cuerpo de la solicitud
  usuarioControlador.agregarUsuario(nuevoUsuario, (error, nuevoId) => {
    if (error) {
      return res.status(500).json({ error: 'Error al agregar nuevo usuario' });
    }
    res.status(200).json({ mensaje: 'Usuario agregado correctamente', id: nuevoId });
  });
});

module.exports = router;
