const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const animalRoutes = require('./routes/animals');
const shelterRoutes = require('./routes/shelters');
const userRoutes = require('./routes/users');
const adoptionRequestRoutes = require('./routes/adoptionRequests');

app.use('/', homeRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/shelters', shelterRoutes);
app.use('/api/users', userRoutes);
app.use('/api/adoption-requests', adoptionRequestRoutes);

// must be after all routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(3000);
