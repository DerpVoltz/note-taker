const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
}

function deleteNote(id, notesArray) { 
    notesArray = notesArray.filter(notesArray => {
        return notesArray.id !== id;
    });

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

}

module.exports =  { 
    createNewNote,
    deleteNote
}