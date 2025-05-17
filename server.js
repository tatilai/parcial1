/*const express = require('express');
const app =express();
require('./db');
const PORT = 3000;

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

//import usersRoutes from './routes/users.routes.js'
import puntosRoutes from './routes/puntos.routes.js'
import rutasRoutes from './routes/rutas.routes.js'
import reportesRoutes from './routes/reportes.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())*/

import express from 'express';
import mongoose from 'mongoose';
//import rutasRoutes from './routes/rutas.routes.js';
import rutasSegurasRoutes from './routes/rutasseguras.routes.js';
import puntosInteresRoutes from './routes/puntosInteres.routes.js';
import reportesRoutes from './routes/reportes.routes.js';
import usersRoutes from './routes/users.routes.js';

const app = express();
app.use(express.json());


// Usar las rutas
//app.use('/api/rutas', rutasRoutes);
app.use('/api/rutasSeguras', rutasSegurasRoutes);
app.use('/api/puntosInteres', puntosInteresRoutes); 
app.use('/api/reportes', reportesRoutes);
app.use('/api/users', usersRoutes);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));



// Conectar a Mongo
mongoose.connect('mongodb://localhost:27017/via_segura')
  .then(() => console.log('Mongo conectado'))
  .catch(err => console.error('Error conectando a Mongo:', err));

  import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

/*mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err))*/




// Rutas
/*app.use('/api/users', usersRoutes)
app.use('/api/puntos', puntosRoutes)
app.use('/api/rutas', rutasRoutes)
app.use('/api/reportes', reportesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})*/

