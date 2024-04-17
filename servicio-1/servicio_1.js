const express = require('express');
const app = express();
const port = 3001;

app.get('/service-1', (req, res) => {
  res.json({ mensaje: "Respuesta desde Servicio 1, soy Juan David y me gustan las películas de Tarantino" });
});

app.listen(port, () => {
  console.log(`Servicio 1 escuchando en http://localhost:${port}`);
});