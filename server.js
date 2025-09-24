const express = require('express');
const app = express();
const path = require('path');

// Statikus fájlok (CSS, JS) kiszolgálása
app.use(express.static(path.join(__dirname, '')));

// Főoldal betöltése (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// /n/ útvonal (nem szükséges, mert az API kérés a frontendről jön)
// Ha szükséges, itt kezelhetjük a kereséseket
// app.get('/n', (req, res) => {
//   const name = req.query.name;
//   // Itt elvégezhetjük a keresést, de mivel az API a frontendről jön, nem szükséges
//   res.send(`<h1>Looking up: ${name}</h1>`);
// });

// Port beállítása
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
