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
    type: INT,  
    required: true,
  },
  idcomentario: {
    type: INT,
  },
};

module.exports = PublicacionSchema;