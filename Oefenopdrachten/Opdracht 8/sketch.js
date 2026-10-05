let WoordString = ['Hoi', ' welkom in het dorp!']
let Inwoners = inwoners(34, 33) // Zorgen dat het op word geteld
let Huisaantal = 11

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  for (let index = 0; index < Huisaantal; index++) {
    tekenHuis(20 + index * 70, 50 + index * 15); // Huisjes teken op een rij
  }

tekenCircle(200, 300, 100) // Circle tekenen
tekenRect(50, 200, 50, 100) // Rect tekenen
tekenLine(20, 100, 770, 262) // hoogste lijn
tekenLine(20, 130, 770, 292) // onderste lijn

for (let index = 0; index < 27; index++) {
  tekenLine(20 + index * 28, 115 + index * 6, 40 + index * 28, 120 + index * 6) // tekenen van wegmarkering
}

tekenString(WoordString, 300, 350, 'blue', 30); // text tekenen op canvas

fill('black');
textSize(20);
text('Inwonersaantal: ' + Inwoners, 300, 380);

for (let index = 0; index < Huisaantal; index++) {
  textSize(15)
  text(1 + index * 2, 40 + index * 70, 45 + index * 15)
  
}
fill('white');
}

function tekenHuis(x, y) {
  rect(x, y, 50, 50); // huis
  triangle(x, y, x + 25, y - 30, x + 50, y) // dak
  rect(x + 5, y + 10, 20, 10) // raam
  rect(x + 30, y + 10, 15, 10) // raam
  rect(x + 23, y + 32, 22, 10) // Raam
  rect(x + 5, y + 30, 10, 20) // deur
}

function tekenCircle(x, y, w) {
  circle(x, y, w);
}

function tekenRect(x, y, w, h) {
  rect(x, y, w, h);
}

function tekenLine(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
}

function tekenString(n, x, y, c, s) {
  fill(c)
  textSize(s)
  text(n, x, y)
}

function inwoners(v1, v2) {
  return v1 + v2;
}