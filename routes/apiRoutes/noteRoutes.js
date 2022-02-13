const express = require('express');
const router = express.Router();
const notes = require('../../db/db.json');
const { createNewNote, deleteNote }  = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    createNewNote(req.body, notes);
    res.json(notes);
});


router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    deleteNote(id, notes)
});

module.exports = router;