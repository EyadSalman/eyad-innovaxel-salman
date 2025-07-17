const express           = require('express');
const controller        = require('../controllers/urlController');
const { validateCreate } = require('../middleware/validation');

const router = express.Router();

router.post('/', validateCreate, controller.createShortUrl);
router.get('/:code', controller.getOriginalUrl);
router.put('/:code', validateCreate, controller.updateUrl);
router.delete('/:code', controller.deleteUrl);
router.get('/:code/stats', controller.getStats);
module.exports = router;
