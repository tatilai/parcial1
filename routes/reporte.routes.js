import express from 'express';
import * as ReporteController from '../controllers/reporte.controller.js';

const router = express.Router();

router.get('/', ReporteController.getAll);
router.get('/:id', ReporteController.getById);
router.post('/', ReporteController.create);
router.put('/:id', ReporteController.update);
router.delete('/:id', ReporteController.remove);

export default router;