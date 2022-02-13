const express = require('express');
const router = express.Router();
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    const results = notes;

    res.json(notes);
})

router.post('/api/notes', (req, res) => {

})

module.exports = router;