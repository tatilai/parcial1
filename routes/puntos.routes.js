import express from 'express';
import * as PuntoController from '../controllers/punto.controller.js';

const router = express.Router();

router.get('/', PuntoController.getAll);
router.get('/:id', PuntoController.getById);
router.post('/', PuntoController.create);
router.put('/:id', PuntoController.update);
router.delete('/:id', PuntoController.remove);

export default router;