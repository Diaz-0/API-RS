const ComentarioSchema = {
    contenido: {
      type: TEXT,
    },
    fecha_creac: {
      type: TIMESTAMP,
      default: CURRENT_TIMESTAMP,
    },
    idperfil: {
      type: INT,
      required: true,
    },
    idPublicacion: {
      type: INT,
      required: true,
    },
};

module.exports = ComentarioSchema;