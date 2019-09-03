const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
  try {
    const notes = JSON.parse(fs.readFileSync('notes.json', 'utf-8'))
    return notes
  } catch (err) {
    return []
  }
}

const createNote = (title = '', body = '') => {
  const notes = getNotes()
  const hasDuplicate = notes.find((note) => note.title === title)
  if (hasDuplicate) {
    console.log(chalk.red.inverse('Title already taken'))
  } else {
    notes.push({ title, body })
    fs.writeFileSync('notes.json', JSON.stringify(notes))
    console.log(chalk.green.inverse('Note Created Successfully!'))
    return { title, body }
  }
}

const getNote = (title = '') => {
  const notes = getNotes()
  const findNote = notes.find((note) => note.title.toLowerCase() === title.toLowerCase())
  if (findNote) {
    console.log(findNote)
    return findNote
  }
  console.log(chalk.keyword('orange').inverse('Wrong title!!'))
  return false
}

const editNote = (title = '', body = '') => {
  const note = getNote(title)
  if (note) {
    const createdNote = createNote(title, body)
    console.log(chalk.green.inverse('Note Edited Successfully!'))
    console.log(createdNote)
  } else {
    console.log(chalk.keyword('orange').inverse('Wrong title!!'))
  }
}

const deleteNote = (title = '') => {
  const prevNote = getNote(title)
  if (prevNote) {
    let notes = getNotes()
    notes = notes.filter((note) => note.title.toLowerCase() !== prevNote.title.toLowerCase())
    fs.writeFileSync('notes.json', JSON.stringify(notes))
    console.log(chalk.green.inverse('Note Deleted Successfully!'))
  } else {
    console.log(chalk.keyword('orange').inverse('Wrong title!!'))
  }
}

const deleteNotes = () => {
  try {
    fs.unlinkSync('notes.json')
    console.log(chalk.green.inverse('All Notes Deleted Successfully!'))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createNote,
  getNotes,
  getNote,
  editNote,
  deleteNote,
  deleteNotes,
}
