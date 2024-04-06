var express = require('express');
var router = express.Router();
const subscriptionController = require('../controllers/subscription');
const upload = require('../utils/upload');

router.post('/add', upload.single('file'), subscriptionController.add);
router.delete('/delete', subscriptionController.delete);
router.get('/get', subscriptionController.get);

module.exports = router;
