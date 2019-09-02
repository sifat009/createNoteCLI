#!/usr/bin/env node
const yargs = require('yargs')

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
    console.log(`Adding task.. + ${argv.title}`)
  },

})

yargs.parse()
