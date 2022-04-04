const notes = require("./notes.js");
const yargs = require("yargs"); //módulo para pasar argumentos en forma de pares clave-valor

yargs.version("1.1.0");

yargs.command({
  command: "add", //creacion del comando 'add'
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title", //definiendo valores del parametro título
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body", //definiendo valores del parametro body
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //handler recibe los argumentos

    notes.addNote(argv.title, argv.body); //carga los argumentos en el modulo addNote
  },
});
yargs.command({
  command: "remove",
  describe: "borrar un titulo",
  builder: {
    describe: " Note title",
    demandOption: true,
    type: "string",
  },

  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "readOneNote",
  describe: "read one note!!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(argv.title);
    notes.readOneNote(argv.title);
  },
});

yargs.command({
  command: "update",
  describe: "actualizar nota",
  builder: {
    title: {
      describe: "titulo de la nota a eliminar",
      demandOption: true,
      type: "string",
    },
    updateTitle: {
      describe: "titulo actualizado",
      demandOption: true,
      type: "String",
    },
    updateBody: {
      describe: "cuerpo actualizado",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.updateNote(argv.title, argv.updateTitle, argv.updateBody);
  },
});

yargs.parse(); //la funcion parse traduce a yargs lo recibido

console.log("Notas creadas: ", notes.listNotes()); // se cargan la lista de notas creadas actualizada
