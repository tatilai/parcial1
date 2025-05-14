// /controllers/ruta.controller.js
import * as RutaService from '../services/ruta.service.js';

export const getAll = async (req, res) => {
  const rutas = await RutaService.getAllRutas();
  res.json(rutas);
};

export const getById = async (req, res) => {
  const ruta = await RutaService.getRutaById(req.params.id);
  if (ruta) res.json(ruta);
  else res.status(404).json({ message: 'Ruta no encontrada' });
};

export const create = async (req, res) => {
  const nuevaRuta = await RutaService.createRuta(req.body);
  res.status(201).json(nuevaRuta);
};

export const update = async (req, res) => {
  const rutaActualizada = await RutaService.updateRuta(req.params.id, req.body);
  res.json(rutaActualizada);
};

export const remove = async (req, res) => {
  await RutaService.deleteRuta(req.params.id);
  res.json({ message: 'Ruta eliminada' });
};