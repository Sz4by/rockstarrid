const express = require('express');
const app = express();
const path = require('path');

// Statikus fájlok (CSS, JS) kiszolgálása
app.use(express.static(path.join(__dirname, '')));

// Főoldal betöltése
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Port beállítása
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
