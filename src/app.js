import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  const excuseLine =  document.getElementById("excuse");
  console.log("Hello Rigo from the console!");

  let nouns = ['My albino lizard', 'Dwayne "The Rock" Johnson', 'Chuck Norris', 'My friend from discord'];
  let verbs = ['did a sick flip', 'blew up the pentagon', 'ripped his arm off', 'broke his elbow'];
  let whos = ['I completely', 'I'];
  let whats = ['lost my mind', 'was daydreaming about scarlett johannason or however you spell her name', 'pissed on myself'];

  function getRandomIndex(array){
    const length = array.length;
    const result = Math.floor(Math.random() * length);
    return result;
  }

  excuseLine.textContent= nouns[getRandomIndex(nouns)] + " " + verbs[getRandomIndex(verbs)]+ ", " + whos[getRandomIndex(whos)] + " " + whats[getRandomIndex(whats)];
};
