const ImagenSchema = {
    ruta: {
      type: varchar(800),
      required: true,
    },
    idPublicacion: {
      type: INT,
      required: true,
    },
  };
  
module.exports = ImagenSchema;