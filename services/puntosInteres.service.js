import PuntosInteres from '../models/puntosInteres.model.js';

export const getAllPuntos = async () => {
  return await PuntosInteres.find();
};

export const createPunto = async (data) => {
  return await PuntosInteres.create(data);
};

export const getPuntoById = async (id) => {
  return await PuntosInteres.findById(id);
};

export const updatePunto = async (id, data) => {
  return await PuntosInteres.findByIdAndUpdate(id, data, { new: true });
};

export const deletePunto = async (id) => {
  return await PuntosInteres.findByIdAndDelete(id);
};