//take input and generate team.txt file

//dependencies
const ask = require("./cli.js");
const fs = require("fs");

const content = "stuff"

fs.appendFile('team.txt', content, (err) => {
  if(err) {
    console.log("Error with writing file");
  }
}); 

