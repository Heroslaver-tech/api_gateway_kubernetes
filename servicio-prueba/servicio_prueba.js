const express = require('express');
const app = express();
const port = 3001;

app.get('/servicio-prueba', (req, res) => {
  res.json({ mensaje: "Respuesta desde Servicio Prueba, soy Sebastian y me gusta tocar guitarra" });
});

app.listen(port, () => {
  console.log(`Servicio A escuchando en http://localhost:${port}`);
});