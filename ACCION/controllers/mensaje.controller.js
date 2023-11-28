const db = require("../../CONEXION/db");
const ConversacionController = require("./conversacion.controller");

class MensajeController {
  async enviarMensaje(req, res) {
    const { contenido, idEmisor, idReceptor } = req.body;

    try {
      const resultMensaje = await db.query("INSERT INTO Mensaje SET ?", { contenido, idEmisor, idReceptor });
      
      const idMensaje = resultMensaje[0].insertId;

      // Crear conversación automáticamente
      const conversacionController = new ConversacionController();
      const resultConversacion = await conversacionController.crearConversacion(idMensaje);

      res.json({
        idMensaje,
        contenido,
        idEmisor,
        idReceptor,
        fecha_creac: new Date(),
        idconversacion: resultConversacion.idconversacion,
      });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      return res.status(500).json({ error: "Error al enviar mensaje" });
    }
  }

  async obtenerConversacion(req, res) {
    const { idperfil1, idperfil2 } = req.params;

    try {
      const mensajes = await db.query(
        "SELECT * FROM Mensaje WHERE (idEmisor = ? AND idReceptor = ?) OR (idEmisor = ? AND idReceptor = ?) ORDER BY fecha_creac",
        [idperfil1, idperfil2, idperfil2, idperfil1]
      );

      res.json(mensajes[0]);
    } catch (error) {
      console.error("Error al obtener conversación:", error);
      return res.status(500).json({ error: "Error al obtener conversación" });
    }
  }
}

module.exports = new MensajeController();