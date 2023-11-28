const db = require("../../CONEXION/db");

class ConversacionController {
  async crearConversacion(idMensaje) {
    try {
      const result = await db.query("INSERT INTO Conversacion (idmensaje) VALUES (?)", [idMensaje]);

      return {
        idconversacion: result[0].insertId,
        fecha_creac: new Date(),
      };
    } catch (error) {
      console.error("Error al crear conversación:", error);
      throw error;
    }
  }
}

module.exports = ConversacionController;