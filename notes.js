const fs = require('fs')       //importamos fs para escribir y leer archivos


const addNote = function(title,body){  //creacion de addNote para formar la estructura del archivo
    console.log("El título de la nota", title)
    console.log("El cuerpo de la nota", body)
    const notes = loadNotes() 
    const duplicateNote = notes.find((note)=> note.title === title) //si la nota está duplicada se muestra una bandera
    if(!duplicateNote){
        notes.push( //agregamos los valores que recibe yargs
            {title:title,
            body:body}
        )
        saveNotes(notes)  //validación si existe o no una nota con el mismo titulo
        console.log("Notas creadas")        
    } else{
        console.log("Nota duplicada")
    }
}
const saveNotes = function(notes){ // metodo para guardar las notas que agregamos,
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON) //agrega la nota en el documento en formato Json
}
const loadNotes= function() {
    try{
        const dataBuffer = fs.readFileSync("notes.json")  //obtiene el archivo de notas
        const dataJSON = dataBuffer.toString()//lo muestra como cadena
        return JSON.parse(dataJSON) //devuelve la  lista
    } catch(e){
        return[] //devuelve lista vacía
    }
}
const listNotes = function(){
    const notes = loadNotes()

    
    notes.forEach((note)=>{
        console.log("titulo de la nota: ",note.title, "cuerpo de la nota: ",note.body);
    })
}
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title != title)

    if(notes.lenght > notesToKeep.lenght){
        console.log("Note Remooved!!");
        saveNotes(notesToKeep)

    }else{
        console.log("Nota Eliminada");
    }
}

const readOneNote = function(title){
    console.log(title)
const notes = loadNotes()
const note = notes.find((note)=>note.title === title)

console.log(note);
if(note){
    
    console.log("Nota encontrada");
    console.log(note.title, note.body);
}else{
    console.log("Nota eliminada");
}
}

    module.exports = { //exportamos los modulos que necesitamos a la app principal 'app.js'
    readOneNote:readOneNote,
        addNote:addNote,
    loadNotes:loadNotes,
    saveNotes:saveNotes,
    removeNote:removeNote,
    listNotes:listNotes
}


