const PublicacionSchema = {
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  fecha_creacion: {
    type: Date,
    default: () => new Date(),
  },
  idperfil: {
    type: INT,  // Asegúrate de definir correctamente el tipo de dato correcto para INT (puede ser Number o algo similar)
    required: true,
  },
};

module.exports = PublicacionSchema;
