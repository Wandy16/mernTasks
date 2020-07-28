const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el servidor
const app = express();


//habilitar cors
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//conectar a la base de datos
conectarDB();


//habilitar express.json
app.use(express.json({extended: true }));

//puerto de la app
const port = process.env.port || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//definir la pagina principal
app.get('/', (req, res) => {
    res.send('hola mundo');
})

//arrancar la app
app.listen(port,'0.0.0.0', () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});