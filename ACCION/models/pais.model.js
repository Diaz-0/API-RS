const PaisSchema = {
    nombre: {
      type: VARCHAR(65),
      required: true,
    },
    idestado: {
      type: INT,
      default: null,
    },
};
module.exports = PaisSchema;  