const express = require('express');
const app = express();
const path = require('path');

// Statikus fájlok (CSS, JS) kiszolgálása
app.use(express.static(path.join(__dirname, '')));

// Főoldal betöltése
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// /n/ útvonal kezelése, a query paraméterek kiolvasása
app.get('/n', (req, res) => {
  const name = req.query.name; // Kiolvassuk a name paramétert

  if (name) {
    res.send(`<h1>Looking up name: ${name}</h1>`);
  } else {
    res.send(`<h1>No name provided</h1>`);
  }
});

// /r/ útvonal kezelése (példa a RID lekérdezéshez)
app.get('/r/:rid', (req, res) => {
  const rid = req.params.rid;
  
  res.send(`<h1>Looking up RID: ${rid}</h1>`);
});

// Port beállítása
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
