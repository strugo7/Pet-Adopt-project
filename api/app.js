const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const animalRoutes = require('./routes/animals');
const shelterRoutes = require('./routes/shelters');

app.use('/', homeRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/shelters', shelterRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(3000);
