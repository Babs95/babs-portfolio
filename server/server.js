const express = require('express');

const app = express();

app.use(express.static('./dist/gestionecolefront'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/gestionecolefront' }
  );
});

app.listen(process.env.PORT || 5000);

console.log(`Running on port ${process.env.PORT || 5000}`)
