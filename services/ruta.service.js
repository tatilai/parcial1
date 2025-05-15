// /services/ruta.service.js
/*import RutaSegura from '../models/ruta.model.js';

export const getAllRutas = async () => {
  return await RutaSegura.find();
};

export const getRutaById = async (id) => {
  return await RutaSegura.findById(id);
};

export const createRuta = async (data) => {
  return await RutaSegura.create(data);
};

export const updateRuta = async (id, data) => {
  return await RutaSegura.findByIdAndUpdate(id, data, { new: true });
};

export const deleteRuta = async (id) => {
  return await RutaSegura.findByIdAndDelete(id);
};
*/

import RutaSegura from '../models/ruta.model.js';
import User from '../models/user.model.js';

export const getAllRutas = async () => {
  return await RutaSegura.find().populate('creadoPor', 'nombre email');
};

export const getRutaById = async (id) => {
  return await RutaSegura.findById(id).populate('creadoPor', 'nombre email');
};

export const createRuta = async (data) => {
  // Validar que el usuario exista
  const usuario = await User.findById(data.creadoPor);
  if (!usuario) throw new Error('Usuario no encontrado');

  return await RutaSegura.create(data);
};

export const updateRuta = async (id, data) => {
  return await RutaSegura.findByIdAndUpdate(id, data, { new: true });
};

export const deleteRuta = async (id) => {
  return await RutaSegura.findByIdAndDelete(id);
};