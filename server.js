const express = require('express');
const app = express();
const path = require('path');

// Statikus fájlok (CSS, JS) kiszolgálása
app.use(express.static(path.join(__dirname, '')));

// Főoldal betöltése
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// /n/ útvonal kezelése
app.get('/n/:name', (req, res) => {
  const name = req.params.name;
  
  // Itt bármilyen logikát beilleszthetsz, ami visszaadja a kívánt információkat.
  // Például, ha egy adatbázis vagy API van a háttérben:
  res.send(`<h1>Looking up name: ${name}</h1>`);
});

// Port beállítása
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
