const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
}
  
  function findById(id, notesArray) {
    const result = notesArray.filter(note=> note.id === id)[0];
    return result;
  }
  
  function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({animals: animalsArray}, null, 2)
    );
    return note;
  }
  
  function validateNote(note) {
    if (!animal.name || typeof note.name !== 'string') {
      return false;
    }
    return true;
  }

  module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
  };