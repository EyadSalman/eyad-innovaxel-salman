const validUrl         = require('valid-url');
const generateCode     = require('../utils/shortCodeGenerator');
const URL              = require('../models/URL');

exports.validateCreate = async (req, res, next) => {
  const { url } = req.body;
  if (!url || !validUrl.isWebUri(url)) {
    return res.status(400).json({ message: 'Invalid or missing URL' });
  }

