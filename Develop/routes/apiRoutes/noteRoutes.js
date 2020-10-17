const router = require("express").Router();
const { filterByQuery, findById, createNewNote, validateNote, deleteById } = require("../../lib/notes");
const { notes } = require("../../db/db.json");
const util = require("util");
const fs = require("fs");
const path = require("path");


router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});


router.delete("/notes/:id", (req, res) => {
  const check = deleteById(req.params.id, notes)
  console.log(`CHECK IN PATH = ${JSON.stringify(check)}`)
  res.json(check)
});


router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const newNote = createNewNote(req.body, notes);
    // console.log(notes);
    res.json(newNote);
  }
});

module.exports = router;