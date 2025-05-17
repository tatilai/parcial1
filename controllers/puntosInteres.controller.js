import * as PuntoService from '../services/puntosInteres.service.js';

export const getAll = async (req, res) => {
  const puntos = await PuntoService.getAllPuntos();
  // console.log('PUNTOS DESDE MONGO:', puntos);
  res.json(puntos);
};

export const getById = async (req, res) => {
  const punto = await PuntoService.getPuntoById(req.params.id);
  if (punto) res.json(punto);
  else res.status(404).json({ message: 'Punto no encontrado' });
};

export const create = async (req, res) => {
  const nuevoPunto = await PuntoService.createPunto(req.body);
  res.status(201).json(nuevoPunto);
};

export const update = async (req, res) => {
  const puntoActualizado = await PuntoService.updatePunto(req.params.id, req.body);
  res.json(puntoActualizado);
};

export const remove = async (req, res) => {
  await PuntoService.deletePunto(req.params.id);
  res.json({ message: 'Punto eliminado' });
};