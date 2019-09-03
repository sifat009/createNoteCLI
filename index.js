#!/usr/bin/env node
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.0.0')

yargs.command({
  command: 'add',
  describe: 'Add a new Note',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.createNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'showAll',
  describe: 'Show all notes',
  handler: () => {
    console.log(notes.getNotes())
  },
})

yargs.command({
  command: 'show',
  describe: 'show a specific task',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.getNote(argv.title)
  },
})

yargs.command({
  command: 'edit',
  describe: 'edit a specific task',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.editNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'delete',
  describe: 'delete a specific task',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.deleteNote(argv.title)
  },
})

yargs.command({
  command: 'deleteAll',
  describe: 'delete all tasks',
  handler: () => {
    notes.deleteNotes()
  },
})


yargs.parse()
