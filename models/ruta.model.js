import mongoose from 'mongoose';

const rutaSchema = new mongoose.Schema({
  nombreRuta: String,
  puntos: [
    {
      lat: Number,
      lng: Number
    }
  ],
  creadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

const RutaSegura = mongoose.model('RutaSegura', rutaSchema);
export default RutaSegura;