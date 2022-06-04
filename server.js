// install module - npm init
// install express - npm install express --save
// npm i cors - so you can install it in a local environment
//set up git ignore folder: takes too much space up - touch.git ignore (may have to do this first)

//set up variables so that server know it is using express

const express = require("express");

// common to put express in variable name app so when making CRUD using app

const app = express();

const cors = require("cors");
const res = require("express/lib/response");
const req = require("express/lib/request");

const PORT = 5000;

//make sure all things in objects is lowercase
const simsCharacters = {
  name: "bobb pancakes",
  gender: "male",
  age: "young adult",
  career: "caterer",
  traits: ["slob", "gloomy", "loner", "essense of flavor"],
  world: "willow creek",
};

//the slash is to go to the main directory. In body the res.sed says respond look @ main directory and grab in8dex file

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html ");
});

// this looks at the port and says if the port I choose does not work use the port of your choosing
app.get('/api', (req, res) =>{
    res.json(simsCharacters)    
})

app.listen(process.env.PORT || PORT, function () {
  console.log(`The server is running on port ${PORT}!`);
});
