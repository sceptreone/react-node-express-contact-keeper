const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Get logged in user
// @acccess  Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @route   Post api/auth
// @desc    Auth user and get token
// @acccess Public
router.post('/', (req, res) => {
    res.send("asd");
});

module.exports = router;