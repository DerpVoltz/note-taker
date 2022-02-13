const express = require('express');
const router = express.Router();
const notes = require('../../db/db.json');
const createNewNote  = require('../../lib/notes');

router.get('/notes', (req, res) => {
    const results = notes;

    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    createNewNote(req.body, notes);
    res.json(notes);
});

module.exports = router;