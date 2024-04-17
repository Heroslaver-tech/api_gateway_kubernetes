const express = require('express');
const app = express();
const port = 8001;

app.get('/service-6', (req, res) => {
  res.json({ mensaje: "Response from service 6. Sup I'm Natalia, I'm not colorblind" });
});

app.listen(port, () => {
  console.log(`Servicio A escuchando en http://localhost:${port}`);
});
