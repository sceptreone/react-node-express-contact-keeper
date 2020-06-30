const express = require('express');
const router = express.Router();

// @route   Post api/users
// @desc    Register a user
// @acccess Public
router.post('/', (req, res) => {
    res.send("User");
});

module.exports = router;