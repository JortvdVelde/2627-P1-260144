// Variable Teller
let TellerCount = 1;

// Variablen Stoplicht
let TrafficLight = false;

let TrafficLightRed = 'red';
let TrafficLightOrange = 'black';
let TrafficLightGreen = 'black';

let TrafficLightTimer = 0;

// Variablen Eightball
let EightballX = 500; // Links rechts
let EightballY = 100; // Op en neer

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  textSize(10);
  fill('black');
  text('1. Houd B in om een blokje te laten verschijnen.', 20, 20);
  text('2. Druk op spatie om het getal op 0 te zetten.', 20, 120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan.', 20, 240);
  text('4. Beweeg de eightball met WASD of de pijltjestoetsen.', 360, 20);

  // Zorgen dat als je B klikt er een vierkant komt
  if (keyIsPressed === true) {
    if (keyCode === 66) {
      fill('white');
      rect(30, 30, 60, 60);
    }
  }

  // Getal optellen en zorgen dat het naar 0 gaat.
  fill('black');
  textSize(20);
  text(round(TellerCount), 20, 140);

  TellerCount += deltaTime * 0.001;
  if (TellerCount > 500) {
    TellerCount = 0;
  }

  // Stoplicht als je op enter klikt veranderen kleur.
  strokeWeight(0);
  fill('#94948d');
  rect(40, 250, 35, 100);
  fill(TrafficLightRed);
  circle(58, 270, 25);
  fill(TrafficLightOrange);
  circle(58, 300, 25);
  fill(TrafficLightGreen);
  circle(58, 330, 25);

  // Kleuren laten veranderen na verloop van tijd. 
  if (TrafficLight == true) {
    TrafficLightTimer += deltaTime * 0.001;

    if (TrafficLightTimer >= 1) {
      TrafficLightRed = 'black';
      TrafficLightGreen = 'green';
    }

    if (TrafficLightTimer >= 4) {
      TrafficLightGreen = 'black';
      TrafficLightOrange = 'orange';
    }

    if (TrafficLightTimer >= 7) {
      TrafficLightOrange = 'black';
      TrafficLightRed = 'red';
      TrafficLight = false;
      TrafficLightTimer = 0;
    }
  }

  // Eightball WASD
  fill('black');
  circle(EightballX, EightballY, 100);
  fill('White');
  circle(EightballX, EightballY, 70);

  // De keys dat de ball kan bewegen
  if (keyIsDown(87) || keyIsDown(38)) { // W
    EightballY = EightballY - 1;
  }
  
  if (keyIsDown(65) || keyIsDown(37)) { // A
    EightballX = EightballX - 1;
  }

  if (keyIsDown(83) || keyIsDown(40)) { // S
    EightballY = EightballY + 1;
  }

  if (keyIsDown(68) || keyIsDown(39)) { // D
    EightballX = EightballX + 1;
  }


  // Invisible wall voor de eightball
  if (EightballX < 325) {
    EightballX = 325;
  }

  if (EightballY > 350) {
    EightballY = 350;
  }

  if (EightballX > 750) {
    EightballX = 750;
  }

  if (EightballY < 75) {
    EightballY = 75
  }
  console.log('X: ' + EightballX)

  // Getal op de eightball
  fill('black')
  text('8', EightballX - 5, EightballY + 6);
}

function keyPressed() {
  if (keyCode === 32) {
    TellerCount = 0;
  }

  if (keyCode === ENTER) {
    TrafficLight = true;
  }
}
