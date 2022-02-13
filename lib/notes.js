// const fs = require('fs');
// const path = reuite('path');

// function checkNotes(body) {
//     if (!body.title || typeof body.title !== 'string') {
//         return false;
//     }

//     if (!body.text || typeof body.text !== 'string') {
//         return false;
//     }
    
// }

// function createNewNotes(body, newNote) {
//     const note = body;
//     newNote.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, '../db/db.json'),
//         JSON.stringify({ note: newNote }, null, 2)
//     );

//     return body;
// }