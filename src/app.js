import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  const p =  document.getElementById("excuse");
  console.log("Hello Rigo from the console!");

  let who = ['My albino lizard', 'Dwayne "The Rock" Johnson', 'Chuck Norris', 'My friend from discord'];
  let action = ['did a sick flip', 'blew up the pentagon', 'ripped his arm off', 'broke his elbow'];
  let what = ['I completely', 'I'];
  let when = ['lost my mind', 'was daydreaming about scarlett johannason or however you spell her name', 'pissed on myself'];

  function getRandomIndex(array){
    const length = array.length;
    const result = Math.floor(Math.random() * length);
    return result;
  }

  p.textContent= who[getRandomIndex(who)] + " " + action[getRandomIndex(action)]+ ", " + what[getRandomIndex(what)] + " " + when[getRandomIndex(when)];
};
