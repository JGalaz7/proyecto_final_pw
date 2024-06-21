esta es la documentacion de este proyecto, las dependencias instaladas no se guardaran enb elrepositorio de deben instalar de manera individual, hasta el momento de la creacion se inicializo el proyecto con node.js (npm init -y) 
tambien se instalo la dependencia express, (npm i express)
ahora se procede a la creacion de la base de datos
tabla: tareas - id_tarera (PK), usuario_id (FK), descripcion, estado_tarea, f_creacion, f_actualizacion
tabla: usuarios - id_usuario (PK), nombre_usuario, clave

ahora que ya estan todo listo para el proyecto, se procede a levantar el servidor, se selecciona el archivo index.js de la carpeta backend
se modifica el package.json ( "main": "index.js"  =>  "main": "/backend/index.js")
para iniciar el servidor se debe importar expres, crear la instancia, declarar el puerto en el que se utilizara, se crea una ruta de prueba con un mensaje y se inisializa el servidor en el archivi index.js

primera prueba: al parecer la primera prueba es exitosa ya que se puede ver en el navegador el servidor con el mensaje creado en la ruta de prueba, ahora seguire con la conexin a la base de datos

para la base de datos se instala la dependencia "npm i mysql2" 

