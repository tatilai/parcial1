// /routes/ruta.routes.js
import express from 'express';
import * as RutaController from '../controllers/ruta.controller.js';

const router = express.Router();

router.get('/', RutaController.getAll);
router.get('/:id', RutaController.getById);
router.post('/', RutaController.create);
router.put('/:id', RutaController.update);
router.delete('/:id', RutaController.remove);

export default router;