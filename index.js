const express = require('express')
const app = express()
const fs = require('fs')  //para la persistencia crearemos un archivo json que se almacenara en file system


//CREAR OBJETO DEPORTES
let deportes = {
    nombre: 'Natación',
    precio: '5000'
    }


//1) Crear una ruta que reciba el nombre y precio de un nuevo deporte, lo persista en un archivo JSON (3 Puntos).
//Persistencia: para crear un archivo json, llamado deportes

fs.readFile("deportes.json", "utf8", function(e, data) {
    // Paso 2 Usar el método JSON.parse para parsear la data obtenida del archivo deportes.json.
    let miDeporte = JSON.parse(data);
    // Paso 3 Imprimir por consola el nombre del deporte
   console.log(miDeporte.nombre);})

    app.get("/deportes", (req, res) => {
        fs.writeFileSync('deportes.json', JSON.stringify(deportes))
        //res.send("Hola Deportes &#128526;")
        res.send(deportes)
    })
//2) Crear una ruta que al consultarse devuelva en formato JSON todos los deportes registrados (2 Puntos).
//crear un archivo JSON
//fs.writeFileSync('deportes.json', JSON.stringify(deportes))


//3) Crear una ruta que edite el precio de un deporte registrado utilizando los parámetros de la consulta y persista este cambio (2 Puntos).




//4) Crear una ruta que elimine un deporte solicitado desde el cliente y persista este cambio (3 Puntos).



//SERVIDOR EXPRESS
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})