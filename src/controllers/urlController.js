const URL = require('../models/URL');

// Create a new short URL
exports.createShortUrl = async (req, res, next) => {
  try {
    const rec = new URL({
      url: req.body.url,
      shortCode: req.shortCode
    });
    await rec.save();
    res.status(201).json(rec);
  } catch (err) {
    next(err);
  }
};

// Retrieve original URL (JSON), increment count
exports.getOriginalUrl = async (req, res, next) => {
  try {
    const rec = await URL.findOne({ shortCode: req.params.code });
    if (!rec) return res.status(404).json({ message: 'Not found' });
    rec.accessCount++;
    await rec.save();
    res.json({ url: rec.url });
  } catch (err) {
    next(err);
  }
};

// Update the long URL
exports.updateUrl = async (req, res, next) => {
  try {
    const updated = await URL.findOneAndUpdate(
      { shortCode: req.params.code },
      { url: req.body.url },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};