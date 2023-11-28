const db = require("../../CONEXION/db");

class PaisController {
  async crearPais(req, res) {
    const { nombre, idestado } = req.body;

    try {
      const result = await db.query("INSERT INTO Pais SET ?", { nombre, idestado });

      res.json({
        idpais: result[0].insertId,
        nombre,
        idestado,
      });
    } catch (error) {
      console.error("Error al crear país:", error);
      return res.status(500).json({ error: "Error al crear país" });
    }
  }

  async obtenerPaises(req, res) {
    try {
      const paises = await db.query("SELECT * FROM Pais");

      res.json(paises[0]);
    } catch (error) {
      console.error("Error al obtener países:", error);
      return res.status(500).json({ error: "Error al obtener países" });
    }
  }
}

module.exports = new PaisController();