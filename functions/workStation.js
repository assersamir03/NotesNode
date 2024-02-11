// import necessary modules

const fs = require("fs");

// define addNote function
const addNote =(title, body)=> {
  // read existing notes from the file
  const theData = checker();

  // if no notes exist, create a new array and add the new note
  if (theData === null) {
    const parsedInput = [{
      title: `${title}`,
      body: `${body}`,
    }, ];
    fs.appendFileSync("notesFile.json", JSON.stringify(parsedInput));
  } else {
    // if notes already exist, append the new note to the array
    if (Array.isArray(theData)) {
      theData.push({
        title: `${title}`,
        body: `${body}`,
      });
    }
    fs.writeFileSync("notesfile.json", JSON.stringify(theData));
  }
};

// define removeNote function
const removeNote =(title)=> {
  // read existing notes from the file
  const theData = checker();
  const notesToKeep = theData.filter((note)=> note.title !== title)
  fs.writeFileSync("notesfile.json", JSON.stringify(notesToKeep));
};

// define readData function 
const readData =()=> {
  theData = checker()
  for (let i = 0; i < theData.length; i++) {
    console.log(`the title: ${theData[i]["title"]} --> theData: ${theData[i]["body"]}`)
  }
}
const ReadSelected=(title)=>{
  theData = checker();
  // for (let i = 0 ; i<theData.length;i++){
  //   if  (theData[i].title===title){
  //     console.log(`here is the note!: ${theData[i].body}`)
  //   }
  // }
  const mynote=theData.filter((data)=> data.title==title)
  console.log(mynote)
}

// define checker function
const checker = ()=> {
  try {
    // try to read the notes file
    const theData = JSON.parse(fs.readFileSync("notesFile.json", "utf-8"));
    return theData;
  } catch (error) {
    // if the file does not exist, create an empty one and return null
    fs.writeFileSync("notesFile.json", "");
    return null;
  }
};
// export functions for use in other files
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  readData: readData,
  ReadSelected: ReadSelected,
};

