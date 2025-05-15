/*const express = require('express');
const app =express();
require('./db');
const PORT = 3000;
*/
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
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Vía Segura</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #fdfdfd; color: #333; }
          footer { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 10px; }
        </style>
      </head>
      <body>
        <h1>API Vía Segura</h1>

        <p>Esta API proporciona información colaborativa en tiempo real sobre:</p>
        <ul>
          <li><strong>Calles sin iluminación</strong> o con problemas de visibilidad.</li>
          <li><strong>Zonas inseguras</strong> reportadas por la comunidad.</li>
          <li><strong>Rutas alternativas</strong> más seguras para desplazarse.</li>
          <li><strong>Alertas vecinales</strong> compartidas por la red de usuarios.</li>
        </ul>

        <h3>¿Qué resolvemos?</h3>
        <p>Combatimos la inseguridad y la desinformación en la vía pública, ayudando a las personas a desplazarse con mayor tranquilidad.</p>

        <h3>Endpoints disponibles:</h3>
        <ul>
          <li><a href="/api/consejos">/api/consejos</a> - Consejos y recomendaciones de seguridad.</li>
          <li><a href="/api/reportes">/api/reportes</a> - Reportes de calles oscuras, zonas inseguras, etc.</li>
        </ul>

        <footer>
          <p><strong>Nombre y Apellido:</strong> Tatiana Ramirez</p>
          <p><strong>Materia:</strong> Aplicaciones Híbridas</p>
          <p><strong>Docente:</strong> Prof. Camila Belén Marcos Galban</p>
          <p><strong>Comisión:</strong> dwn4av</p>
        </footer>
      </body>
    </html>
  `);
});


// Rutas
//app.use('/api/users', usersRoutes)
app.use('/api/puntos', puntosRoutes)
app.use('/api/rutas', rutasRoutes)
app.use('/api/reportes', reportesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})