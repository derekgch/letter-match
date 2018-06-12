
const letters = genCharArray('a', 'z');
var testing = []
var random = shuffle(letters);

var singleArray = random.slice(0,8);
var doubleArray = singleArray;
singleArray.forEach(e => doubleArray.push(e));




var shuffledArray = shuffle(doubleArray);



let gamePad = document.getElementById("pokemon-container");
let userClick = document.getElementById("container");


console.log(gamePad);
// debugger;

document.addEventListener("DOMContentLoaded", function() {
  let diff = 16;
  let revealed;

  // debugger;

  for(let i = 0; i < diff; i++){

    newText = document.createElement('h1');
    newText.innerText = "?";
    newText.style = "font-size: 90px";
    newText.id = shuffledArray[i];

    newPoke = document.createElement('div');
    newPoke.className = "pokemon-container";

    newLetter = document.createElement('div');

    newLetter.className = "pokemon-frame center-text";
    newLetter.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc";

    newLetter.appendChild(newText);
    newPoke.appendChild(newLetter);
    gamePad.appendChild(newPoke);

  }


userClick.addEventListener('click', event => {
  if (event.target.localName === 'h1') {

    if(event.target.innerText !=='?'){
      revealed = event.target.innerText;
      event.target.innerText ='?';
    }else {
      event.target.innerText = event.target.id;
    }
  }
  console.log(event);



});


})


function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
