var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new - must be defined before the 'show' route so it doesn't
// think that 'new' is a skill name
router.get('/new', skillsCtrl.new);

// GET /skills/:name
router.get('/:name',skillsCtrl.show);

// POST /skills
router.post('/', skillsCtrl.create);  // add this route

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;