let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen = [];
let knoppenAfbeelding = [];

let afbeeldingen = [];

function preload() {
  for (let index = 0; index < bestanden.length; index++) {
    afbeeldingen[index] = loadImage('assets/' + bestanden[index] + '.png');
  }
}

function setup() {
  
  createCanvas(1000, 400);
background(220);

  for (let index = 0; index < kleuren.length; index++) {
    let button = createButton(kleuren[index])
    button.position(100 + index * 100, 100);
    button.style('background-color', kleuren[index]);
    button.style('font-size', '16px');
    knoppen.push(button);
  }

  knoppen[0].mousePressed(redbutton);
  knoppen[1].mousePressed(greenbutton);
  knoppen[2].mousePressed(bluebutton);
  knoppen[3].mousePressed(orangebutton);
  knoppen[4].mousePressed(purplebutton);
  knoppen[5].mousePressed(yellowbutton);

  for (let index = 0; index < afbeeldingen.length; index++) {
    let button = createButton(bestanden[index])
    button.position(10 + index * 100, 150);
    button.style('background-color', 'white');
    button.style('font-size', '16px');
    knoppenAfbeelding.push(button);
  }

  knoppenAfbeelding[0].mousePressed(A0);
  knoppenAfbeelding[1].mousePressed(A1);
  knoppenAfbeelding[2].mousePressed(A2);
  knoppenAfbeelding[3].mousePressed(A3);
  knoppenAfbeelding[4].mousePressed(A4);
  knoppenAfbeelding[5].mousePressed(A5);
  knoppenAfbeelding[6].mousePressed(A6);
  knoppenAfbeelding[7].mousePressed(A7);
  knoppenAfbeelding[8].mousePressed(A8);
  knoppenAfbeelding[9].mousePressed(A9);
  
}

function draw() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[index], 0 + index * 80, 20, 70, 55) 
  }
}

function redbutton() {
  background("red")
}

function greenbutton() {
  background("green")
}

function bluebutton() {
  background("blue")
}

function orangebutton() {
  background("orange")
}

function purplebutton() {
  background("purple")
}

function yellowbutton() {
  background("yellow")
}

function A0() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[0], 5, 200, 70, 55);
  }
}

function A1() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[1], 105, 200, 70, 55);
  }
}


function A2() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[2], 205, 200, 70, 55);
  }
}


function A3() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[3], 305, 200, 70, 55);
  }
}


function A4() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[4], 405, 200, 70, 55);
  }
}


function A5() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[5], 505, 200, 70, 55);
  }
}


function A6() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[6], 605, 200, 70, 55);
  }
}


function A7() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[7], 705, 200, 70, 55);
  }
}

function A8() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[8], 805, 200, 70, 55);
  }
}

function A9() {
  for (let index = 0; index < afbeeldingen.length; index++) {
    image(afbeeldingen[9], 905, 200, 70, 55);
  }
}


