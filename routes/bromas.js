const { Router } = require('express');
const { getBromas } = require('../controllers/bromas');
const router = Router();

router.get('/',getBromas);

module.exports = router;