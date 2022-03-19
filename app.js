

const  notes = require ('./notes.js')
const  {loadNotes} = require ('./notes.js') 
const yargs = require ('yargs') //módulo para pasar argumentos en forma de pares clave-valor 

yargs.version("1.1.0")

yargs.command(
    {
    command: 'add', //creacion del comando 'add'
    describe: 'Add new note',
    builder:{ 
        title :{
            describe: "Note title", //definiendo valores del parametro título
            demandOption: true,
            type:'string'
        },
        body:{
            describe: "Note body",//definiendo valores del parametro body
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){//handler recibe los argumentos
            
            notes.addNote(argv.title,argv.body)//carga los argumentos en el modulo addNote
    }
    }
    
)
yargs.parse() //la funcion parse traduce a yargs lo recibido
console.log("Notas creadas: ",loadNotes()); // se cargan la lista de notas creadas actualizada
