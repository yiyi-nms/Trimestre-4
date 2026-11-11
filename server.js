const express = require('express');
const app = express();

const peliculasRoutes = require('./routes/peliculas.routes');
const db =require('./config/db');

app.use(express.json());
    app.get('/', (req, res) => {
    res.send('Primer servidor en Express');
});

app.use('/peliculas', peliculasRoutes);

async function probarConexion(){
    try{
        const conexion = await db.getConnection();
        console.log('Conexión a la base de datos exitosa');
        conexion.release();
    } catch (error){
        console.error('Error al conectar a la base de datos:', error.message);
    }
}

probarConexion();

app.listen(3000, () => {
    console.log('Servidor ejecutándose por el puerto 3000');
});
