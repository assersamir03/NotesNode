const yargs = require("yargs")
const work = require("./functions/workStation")
//change our version!
yargs.version('17.7.2')


//use yargs commands 
yargs.command({
    command: 'add',
    describe: "we use that command to add notes!",
    builder: {
        title: {
            describe: "that is the title of the new note!",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "that is the note it self!",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        work.addNote(argv.title, argv.body)
    }
})

// create a remove command
yargs.command({
    command: "remove",
    describe: "this command remove notes by name",
    builder: {
        title: {
            describe: "this is the remove command in the main file",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        work.removeNote(argv.title)
    }
})

// create a read command!
yargs.command({
    command: "read",
    describe: "this command read  notes",
    handler () {
        work.readData()
    }

})
yargs.command({
    command: "ReadSelected",
    describe: "this command read a note",
    builder:{
        title: {
            describe: "this is the remove command in the main file",
            demandOption: true,
            type:'string'
        }
    },
    handler (argv) {
        work.ReadSelected(argv.title)
    }

})


console.log("hello world")
yargs.parse()