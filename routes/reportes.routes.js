/*import express from 'express';
import * as ReporteController from '../controllers/reporte.controller.js';

const router = express.Router();

router.get('/', ReporteController.getAll);
router.get('/:id', ReporteController.getById);
router.post('/', ReporteController.create);
router.put('/:id', ReporteController.update);
router.delete('/:id', ReporteController.remove);

export default router;*/

import { Router } from 'express';
import Reporte from '../models/reporte.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const reportes = await Reporte.find();
  res.json(reportes);
});

router.post('/', async (req, res) => {
  try {
    const nuevo = new Reporte(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;