import Reporte from '../models/reporte.model.js';
import User from '../models/user.model.js';

export const getAllReportes = async () => {
  return await Reporte.find().populate('creadoPor', 'nombre email');
};

export const getReporteById = async (id) => {
  return await Reporte.findById(id).populate('creadoPor', 'nombre email');
};

export const createReporte = async (data) => {
  // Validar que el usuario exista
  const usuario = await User.findById(data.creadoPor);
  if (!usuario) throw new Error('Usuario no encontrado');

  return await Reporte.create(data);
};

export const updateReporte = async (id, data) => {
  return await Reporte.findByIdAndUpdate(id, data, { new: true });
};

export const deleteReporte = async (id) => {
  return await Reporte.findByIdAndDelete(id);
};