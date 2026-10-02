// https://openprocessing.org/@michelleinspace/2189726
// Keybinds
// Backspace: Kleuren veranderen
// Enter: Extra rij circles toevoegen aan de zij- en onderkant
// D: Kleuren laten veranderen snel tot je spatie doet



let XposCircle = 140; // X-Positie van middelste vak 
let YposCircle = 70; // Y-positie van middelste vak
let GrootteCircle = 50; // Grootte van de circles

let VakkenVerschil = 500; // Hoeveel verschiler aan zit op de X en Y positite

let LoopKleurCircle = 10; // Voorwaarde loop
let KleurCircle = []

let CircleHeenX = 1; // Zorgen dat de circles van links naar rechts kunnen
let CircleHeenY = 1; // Zorgen dat de circles van boven naar beneden kunnen
let CircleGrootteB = 1 // Zorgen dat de circle groter en kleiner kunnen worden

function setup() {
  createCanvas(800, 600);

  for (let index = 0; index < LoopKleurCircle; index++) {
    KleurCircle.push([random(0, 255), random(0, 255), random(0, 255)])
  }
}

function draw() {
  background(220);
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

  // Zorgen dat als je op D drukt de kleur gaan wisselen tot je op spatie klikt.
  if (keyIsDown) {
    if (keyCode === 68) { // IF-statement activeren bij spatiebalk
      KleurCircle = [] // Zorgen dat de array leeg is

      for (let index = 0; index < LoopKleurCircle; index++) {
        KleurCircle.push([random(0, 255), random(0, 255), random(0, 255)]) // Zorgen dat de array gevuld word met een nieuwe combinatie
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 8) { // IF-statement activeren bij backspace
    KleurCircle = [] // Zorgen dat de array leeg is

    for (let index = 0; index < LoopKleurCircle; index++) {
      KleurCircle.push([random(0, 255), random(0, 255), random(0, 255)]) // Zorgen dat de array gevuld word met een nieuwe combinatie
    }
  }

  if (keyCode === 13) { // IF-statement activeren bij ENTER
    KleurCircle.push([random(0, 255), random(0, 255), random(0, 255)]) // Extra rij creeeren bij de zij- en onderkant
  }
}

