import * as ReporteService from '../services/reporte.service.js';

export const getAll = async (req, res) => {
  const reportes = await ReporteService.getAllReportes();
  res.json(reportes);
};

export const getById = async (req, res) => {
  const reporte = await ReporteService.getReporteById(req.params.id);
  if (reporte) res.json(reporte);
  else res.status(404).json({ message: 'Reporte no encontrado' });
};

export const create = async (req, res) => {
  try {
    const nuevoReporte = await ReporteService.createReporte(req.body);
    res.status(201).json(nuevoReporte);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  const reporteActualizado = await ReporteService.updateReporte(req.params.id, req.body);
  res.json(reporteActualizado);
};

export const remove = async (req, res) => {
  await ReporteService.deleteReporte(req.params.id);
  res.json({ message: 'Reporte eliminado' });
};