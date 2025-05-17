// /routes/ruta.routes.js
/*import express from 'express';
import * as RutaController from '../controllers/ruta.controller.js';

const router = express.Router();

router.get('/', RutaController.getAll);
router.get('/:id', RutaController.getById);
router.post('/', RutaController.create);
router.put('/:id', RutaController.update);
router.delete('/:id', RutaController.remove);

export default router;


import { Router } from 'express';
import Ruta from '../models/ruta.model.js';

const router = Router();

// Obtener todas las rutas
router.get('/', async (req, res) => {
  const rutas = await Ruta.find();
  res.json(rutas);
});

// Crear nueva ruta
router.post('/', async (req, res) => {
  const nuevaRuta = new Ruta(req.body);
  await nuevaRuta.save();
  res.status(201).json(nuevaRuta);
});

export default router;
*/

import { Router } from 'express';
import Ruta from '../models/ruta.model.js';
import RutaSegura from '../models/ruta.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const rutas = await RutaSegura.find();
  res.json(rutas);
});

router.post('/', async (req, res) => {
  try {
    const nueva = new Ruta(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;