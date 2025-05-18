/*import express from 'express';
import * as ReporteController from '../controllers/reporte.controller.js';

const router = express.Router();

router.get('/', ReporteController.getAll);
router.get('/:id', ReporteController.getById);
router.post('/', ReporteController.create);
router.put('/:id', ReporteController.update);
router.delete('/:id', ReporteController.remove);

export default router;

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

export default router;*/




import { Router } from 'express';
import Reporte from '../models/reporte.model.js';

const router = Router();

// Obtener todos los reportes con filtros, búsqueda, orden y paginado
router.get('/', async (req, res) => {
  try {
    const { estado, direccion, descripcion, ordenar, pagina = 1, limite = 10 } = req.query;

    const filtro = {};
    if (estado) filtro.estado = estado;
    if (direccion) filtro['ubicacion.direccion'] = direccion;
    if (descripcion) filtro.descripcion = { $regex: descripcion, $options: 'i' }; // Búsqueda por texto parcial

    const orden = ordenar ? { fecha: ordenar === 'asc' ? 1 : -1 } : {};

    const reportes = await Reporte.find(filtro)
      .sort(orden)
      .skip((pagina - 1) * limite)
      .limit(parseInt(limite));

    res.json(reportes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener reporte por ID
router.get('/:id', async (req, res) => {
  try {
    const reporte = await Reporte.findById(req.params.id);
    if (!reporte) return res.status(404).json({ error: 'Reporte no encontrado' });
    res.json(reporte);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Crear nuevo reporte
router.post('/', async (req, res) => {
  try {
    const nuevo = new Reporte(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar reporte por ID
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Reporte.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Reporte no encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar reporte por ID
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Reporte.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Reporte no encontrado' });
    res.json({ mensaje: 'Reporte eliminado con éxito' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;