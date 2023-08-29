var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/:name
router.get('/:name',skillsCtrl.show);

module.exports = router;