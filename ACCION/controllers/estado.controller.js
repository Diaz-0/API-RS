const db = require("../../CONEXION/db");

class EstadoController {
  async crearEstado(req, res) {
    const { nombre } = req.body;

    try {
      const result = await db.query("INSERT INTO Estado SET ?", { nombre });

      res.json({
        idestado: result[0].insertId,
        nombre,
      });
    } catch (error) {
      console.error("Error al crear estado:", error);
      return res.status(500).json({ error: "Error al crear estado" });
    }
  }

  async obtenerEstados(req, res) {
    try {
      const estados = await db.query("SELECT * FROM Estado");

      res.json(estados[0]);
    } catch (error) {
      console.error("Error al obtener estados:", error);
      return res.status(500).json({ error: "Error al obtener estados" });
    }
  }
}

module.exports = new EstadoController();