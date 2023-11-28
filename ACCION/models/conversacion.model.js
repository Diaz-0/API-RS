const ConversacionSchema = {
  fecha_creac: {
    type: TIMESTAMP,
    default: CURRENT_TIMESTAMP,
  },
  idMensaje: {
    type: INT,
    required: true,
  },
};

module.exports = ConversacionSchema;