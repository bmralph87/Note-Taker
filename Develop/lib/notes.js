// const { text } = require("express");
const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}


function filterByQuery(query, notes) {
  let filteredResults = notes;
  if (query.title) {
    filteredResults = filteredResults.filter(
      // Since our form data will be coming in as strings, and our JSON is storing
      // age as a number, we must convert the query string to a number to
      // perform a comparison:
      (note) => note.title === String(query.title)
    );
  }
  if (query.text) {
    filteredResults = filteredResults.filter(
      (note) => note.text === query.text
    );
  }
  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}


function createNewNote(body, notesArray) {
  const notes = body;
  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
  // console.log(note);
}

function validateNote(notes) {
  if (!notes.title || typeof notes.title !== 'string') {
    return false;
  }
  return res.json(false);
}


module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote
};

// const saveTitle = Event => {
//   event.preventDefault();
//   const index.html = $savenoteTitle.querySelector('[name="title"]');
//    getNoteTitle(titleobject??)
// }
// $.addEventListener('save',)