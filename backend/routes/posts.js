const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');

router.post('/', postCtrl.createPost);
// router.delete('/:id', userCtrl.deletePost);

module.exports = router;