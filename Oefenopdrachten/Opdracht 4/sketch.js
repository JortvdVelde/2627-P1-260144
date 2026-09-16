// Variable Teller
let TellerCount = 1;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  textSize(10)
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
  if(TellerCount > 500) {
    TellerCount = 0;
  }
}

function keyPressed() {
  if(keyCode === 32) {
    TellerCount = 0;
  }
}
