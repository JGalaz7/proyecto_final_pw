const express = require('express');
const mysql = require('mysql2');


//configuracion de la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tareas_pf'
  });

//conexion a lña base de datos
conexion.connect((error) => {
    if (error) {
      console.error('no se puede conectar la db', error);
      return;
    }
    console.log('Conexion exitosa washooooo');
  });


//crear usuarios
exports.agregarUsuario = (nuevoUsuario, callback) => {
    conexion.query('INSERT INTO usuarios SET ?', nuevoUsuario, (error, resultados) => {
      if (error) {
        console.error('Error al insertar nuevo usuario:', error);
        callback(error, null);
        return;
      }
      console.log('Nuevo usuario registrado:', resultados.insertId);
      callback(null, resultados.insertId);
    });
  };
  

//levantar el servidor en el puerto 3000
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('prueba de que se esta ejecutando desde el servidor');
});

app.listen(puerto, () => {
    console.log(`estamos vivos desde el puerto: ${puerto}`);
});
