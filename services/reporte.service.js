
/*
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
*/

// services/reporte.service.js
export const getAllReportes = async (filtros) => {
  const { estado, direccion, orden = 'desc', inicio = 0, limite = 10 } = filtros;

  const query = {};
  if (estado) query.estado = estado;
  if (direccion) query['ubicacion.direccion'] = { $regex: direccion, $options: 'i' }; // búsqueda por dirección

  const ordenamiento = { fecha: orden === 'asc' ? 1 : -1 };

  return await Reporte.find(query)
    .sort(ordenamiento)
    .skip(parseInt(inicio))
    .limit(parseInt(limite))
    .populate('creadoPor', 'nombre email');
};