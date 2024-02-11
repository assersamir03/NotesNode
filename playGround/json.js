const fs = require("fs")

const parsedFile = JSON.parse(fs.readFileSync("file.json", "utf-8"))
parsedFile['employees'][0]['firstName'] = "Asser"
parsedFile['employees'][0]['lastName'] = "Elsheik"
console.log(parsedFile)
fs.writeFileSync("theNewJsonFile.json", JSON.stringify(parsedFile, null, 2))