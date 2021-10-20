const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const {title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.json('Error in adding Note');
  }
});

// Delete Route for removing a note
notes.delete('/:id', (req, res) => {
    console.info(`${req.method} requrest received for notes`);
    console.log(req.body);

    const {title, text, note_id} = req.body

    if (title && text && note_id) {
        // Creating a variable to be compared to
        const currentNote = {
            title,
            text,
            note_id
        };       //write a function below to read the file, loop and find the id, and then delete the note 

    }
    
}
)

module.exports = notes;