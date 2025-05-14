import mongoose from 'mongoose';

const reporteSchema = new mongoose.Schema({
  descripcion: String,
  ubicacion: {
    direccion: String,
    lat: Number,
    lng: Number
  },
  creadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  estado: {
    type: String,
    enum: ['pendiente', 'investigando', 'confirmado', 'falsa'],
    default: 'pendiente'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

const Reporte = mongoose.model('Reporte', reporteSchema);
export default Reporte;
