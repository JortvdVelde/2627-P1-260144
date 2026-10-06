let Timer = 0;

let XposCircle = 140; // X-Positie van middelste vak 
let YposCircle = 70; // Y-positie van middelste vak
let GrootteCircle = 50; // Grootte van de circles

let VakkenVerschil = 850; // Hoeveel verschiler aan zit op de X en Y positite

let LoopKleurCircle = 15; // Voorwaarde loop
let KleurCircle = []

let CircleHeenX = 1; // Zorgen dat de circles van links naar rechts kunnen
let CircleHeenY = 1; // Zorgen dat de circles van boven naar beneden kunnen
let CircleGrootteB = 1 // Zorgen dat de circle groter en kleiner kunnen worden

let cirkels = [];

function setup() {
  createCanvas(2000, 2000);

  for (let index = 0; index < 3000; index++) {
    let C = {
      xPositie: random(50, width),
      yPositie: random(50, height),
      radius: random(10, 50),
      snelheidX: random(-5, 5),
      snelheidY: random(-5, 5)
    }

    cirkels.push(C);
  }
}

function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(0);

  // Bovenste rij vakken
  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle - VakkenVerschil, YposCircle + index * GrootteCircle - VakkenVerschil, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5 - VakkenVerschil, YposCircle + index * GrootteCircle + 5 - VakkenVerschil, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5 - VakkenVerschil, YposCircle + index * GrootteCircle - 5 - VakkenVerschil, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle, YposCircle + index * GrootteCircle - VakkenVerschil, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5, YposCircle + index * GrootteCircle + 5 - VakkenVerschil, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5, YposCircle + index * GrootteCircle - 5 - VakkenVerschil, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + + i * GrootteCircle + VakkenVerschil, YposCircle + index * GrootteCircle - VakkenVerschil, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5 + VakkenVerschil, YposCircle + index * GrootteCircle + 5 - VakkenVerschil, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5 + VakkenVerschil, YposCircle + index * GrootteCircle - 5 - VakkenVerschil, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  // Middelste rij vakken
  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle - VakkenVerschil, YposCircle + index * GrootteCircle, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5 - VakkenVerschil, YposCircle + index * GrootteCircle + 5, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5 - VakkenVerschil, YposCircle + index * GrootteCircle - 5, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  // Middelste vak (Stuurt alles aan)
  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle, YposCircle + index * GrootteCircle, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5, YposCircle + index * GrootteCircle + 5, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5, YposCircle + index * GrootteCircle - 5, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + + i * GrootteCircle + VakkenVerschil, YposCircle + index * GrootteCircle, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5 + VakkenVerschil, YposCircle + index * GrootteCircle + 5, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5 + VakkenVerschil, YposCircle + index * GrootteCircle - 5, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  // Onderste rij vakken
  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle - VakkenVerschil, YposCircle + index * GrootteCircle + VakkenVerschil, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5 - VakkenVerschil, YposCircle + index * GrootteCircle + 5 + VakkenVerschil, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5 - VakkenVerschil, YposCircle + index * GrootteCircle - 5 + VakkenVerschil, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle, YposCircle + index * GrootteCircle + VakkenVerschil, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5, YposCircle + index * GrootteCircle + 5 + VakkenVerschil, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5, YposCircle + index * GrootteCircle - 5 + VakkenVerschil, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + + i * GrootteCircle + VakkenVerschil, YposCircle + index * GrootteCircle + VakkenVerschil, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5 + VakkenVerschil, YposCircle + index * GrootteCircle + 5 + VakkenVerschil, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5 + VakkenVerschil, YposCircle + index * GrootteCircle - 5 + VakkenVerschil, GrootteCircle - 15, GrootteCircle - 15);
    }
  }

  // Heen en weer laten bewegen van links naar rechts
  if (CircleHeenX == 1) {
    XposCircle = XposCircle + 1; // Zorgen dat het naar rechts beweegt
    if (XposCircle > 320) { // Check vanaf waar hij terug moet gaan
      CircleHeenX = 0; // Zorgen dat het weer naar links gaat
    }
  }

  else if (CircleHeenX == 0) {
    XposCircle = XposCircle - 1; // Zorgen dat het naar links gaat
    if (XposCircle < 20) { // Check vanaf waar hij terug moet
      CircleHeenX = 1; // Zorgen dat het naar rechts beweegt
    }
  }

  // Boven naar beneden laten bewegen 
  if (CircleHeenY == 1) {
    YposCircle = YposCircle + 1; // Zorgen dat het naar beneden gaat
    if (YposCircle > 120) { // Check of hij terug moet
      CircleHeenY = 0; // Aanzetten dat hij terug moet
    }
  }

  else if (CircleHeenY == 0) {
    YposCircle = YposCircle - 1; // Zorgen dat het naar boven gaat
    if (YposCircle < 25) {
      CircleHeenY = 1;
    }
  }

  // Zorgen dat de circles groter en kleiner worden
  if (CircleGrootteB == 1) {
    GrootteCircle = GrootteCircle + 0.5; // Zorgen dat de circle groter wordt
    if (GrootteCircle > 60) { // Checken of de circle weer kleiner moet worden
      CircleGrootteB = 0; // Zorgen dat de circle weer kleiner wordt
    }
  }

  else if (CircleGrootteB == 0) {
    GrootteCircle = GrootteCircle - 0.5; // Zorgen dat de circle kleiner wordt
    if (GrootteCircle < 30) { // Checken of de circle weer groter moet worden
      CircleGrootteB = 1; // Zorgen dat de circle groter kan worden
    }
  }

  KleurCircle = [] // Zorgen dat de array leeg is

  for (let index = 0; index < LoopKleurCircle; index++) {
    KleurCircle.push([random(0, 255), random(0, 255), random(0, 255)]) // Zorgen dat de array gevuld word met een nieuwe combinatie
  }

  for (let index = 0; index < cirkels.length; index++) {
    let cirkel = cirkels[index];

    fill(random(0, 255), random(0, 255), random(0, 255));
    circle(cirkel.xPositie, cirkel.yPositie, cirkel.radius);
    cirkel.xPositie = cirkel.xPositie + cirkel.snelheidX;
    cirkel.yPositie = cirkel.yPositie + cirkel.snelheidY;

    if (cirkel.xPositie < 0) {
      cirkel.snelheidX *= -1
    }

    if (cirkel.yPositie < 0) {
      cirkel.snelheidY *= -1
    }

    if (cirkel.xPositie > width) {
      cirkel.snelheidX *= -1
    }

    if (cirkel.yPositie > height) {
      cirkel.snelheidY *= -1
    }
  }

  round(Timer += deltaTime * 0.001)

  fill('black');
  textSize(50);
  text(Timer, 250, 250);


}
