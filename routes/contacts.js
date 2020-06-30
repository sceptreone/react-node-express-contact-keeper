const express = require('express');
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all user contacts
// @acccess Private
router.get('/', (req, res) => {
    res.send("asd");
});

// @route   POST api/contacts
// @desc    Add new contact
// @acccess Private
router.post('/', (req, res) => {
    res.send("asd");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @acccess Private
router.put('/:id', (req, res) => {
    res.send("Dummy");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @acccess Private
router.delete('/:id', (req, res) => {
    res.send("Dummy");
});

module.exports = router;