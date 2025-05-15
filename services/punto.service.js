import PuntoInteres from '../models/punto.model.js';

export const getAllPuntos = async () => {
  return await PuntoInteres.find();
};

export const createPunto = async (data) => {
  return await PuntoInteres.create(data);
};

export const getPuntoById = async (id) => {
  return await PuntoInteres.findById(id);
};

export const updatePunto = async (id, data) => {
  return await PuntoInteres.findByIdAndUpdate(id, data, { new: true });
};

export const deletePunto = async (id) => {
  return await PuntoInteres.findByIdAndDelete(id);
};