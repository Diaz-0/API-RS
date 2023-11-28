const MensajeSchema = {
  contenido: {
    type: TEXT,
    required: true,
  },
  idEmisor: {
    type: INT,
    required: true,
  },
  idReceptor: {
    type: INT,
    required: true,
  },
  fecha_creac: {
    type: TIMESTAMP,
    default: CURRENT_TIMESTAMP,
  },
};

module.exports = MensajeSchema;