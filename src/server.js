require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');

const urlRoutes    = require('./routes/urlRoutes');
const errorHandler = require('./middleware/errorHandler');
const URL          = require('./models/URL');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Friendly redirect: GET /<code> → 302 to the long URL
app.get('/:code', async (req, res, next) => {
  try {
    const rec = await URL.findOne({ shortCode: req.params.code });
    if (!rec) return res.status(404).send('Not found');
    rec.accessCount++;
    await rec.save();
    res.redirect(rec.url);
  } catch (err) {
    next(err);
  }
});

// Mount the /shorten API routes
app.use('/shorten', urlRoutes);

// Global error handler
app.use(errorHandler);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
