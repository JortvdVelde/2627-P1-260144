let TrafficColor = 0; // Standaard kleur van stoplicht (groen).
let TrafficTimer = 0; // Zorgen dat de timer start op 0.

let TrafficUseTimer = false; // Checkt of de timer aan en uitstaat.

let TrafficOneRound = false; // Checkt of het stoplicht bezig is met een ronde.


function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  strokeWeight(0);

  // Vormen stoplicht
  fill('#575552');
  rect(600, 200, 32, 70);
  rect(611, 270, 10, 30);
  fill('black');
  circle(616, 213, 16); // Rood
  circle(616, 235, 16); // Oranje
  circle(616, 256, 16); // Groen

  // Trafficcolor waarde een kleur geven
  if (TrafficColor == 0) {
    fill('green');
    circle(616, 256, 16);
  }

  if (TrafficColor == 1) {
    fill('orange');
    circle(616, 235, 16);
  }

  if (TrafficColor == 2) {
    fill('red');
    circle(616, 213, 16);
  }

  // Timer
  if (TrafficUseTimer == true) {
    TrafficTimer += deltaTime * 0.001;
    if (TrafficTimer >= 1) {
      TrafficColor = 0;
    }

    if (TrafficTimer >= 4) {
      TrafficColor = 1;
    }

    if (TrafficTimer >= 7) {
      TrafficColor = 2;
    }

    if (TrafficTimer >= 10) {
      TrafficColor = 0;
      TrafficTimer = 0;
    }
  }

  // Zorgen dat op spatiebalk de cyclus een keer het doet.
  if (TrafficOneRound == true) {
    TrafficTimer += deltaTime * 0.001;
    if (TrafficTimer >= 1) {
      TrafficColor = 0;
    }

    if (TrafficTimer >= 4) {
      TrafficColor = 1;
    }

    if (TrafficTimer >= 7) {
      TrafficColor = 2;
    }

    if (TrafficTimer >= 10) {
      TrafficColor = 0;
      TrafficTimer = 0;
      TrafficOneRound = false;
      carspeed0 = 1.9;
      carspeed1 = 2.2;
      carspeed2 = 2.8;
      carspeed3 = 3.2;
    }
  }

  // Autos kunnen rijden als het groen en oranje is
  if (TrafficColor == 0 || TrafficColor == 1) {
    car1v = car1v + carspeed0;
    car1b = car1b + carspeed0;

    car2v = car2v + carspeed2;
    car2b = car2b + carspeed2;

    car3v = car3v + carspeed3;
    car3b = car3b + carspeed3;

    car4v = car4v + carspeed1;
    car4b = car4b + carspeed1;
  }

  // Auto's bovenste baan
  // Rood stopt voor stoplicht
  if (TrafficColor == 1 && car3v >= 475 && car3v <= 500) {
    carspeed3 = 0;

    // Blauw stopt voor stoplicht achter rood
    if (TrafficColor == 1 && car2v >= 325 && car2v <= 350) {
      carspeed2 = 0;
    }
  }
  
  // Auto's onderste baan
  // Licht groen stop voor stoplicht
  if (TrafficColor == 1 && car4v >= 475 && car4v <= 500) {
    carspeed1 = 0;

    // Licht blauw stopt voor stoplicht achter groen
    if (TrafficColor == 1 && car1v >= 325 && car1v <= 350) {
      carspeed0 = 0;
    }
  }
}

function keyPressed() {
  // Zelfstandig aanpassen stoplicht (T)
  if (keyCode === 84) {
    TrafficColor++;

    if (TrafficColor > 2) {
      TrafficColor = 0;
    }
  }

  // Aan uit zetten automatische overgang (E)
  if (keyCode === 69 && TrafficUseTimer == false) {
    TrafficUseTimer = true;
  }

  else if (keyCode === 69 && TrafficUseTimer == true) {
    TrafficUseTimer = false;
  }

  // 1x Cyclus uitvoeren en daarna stoppen
  if (keyCode === 32 && TrafficOneRound == false) {
    TrafficOneRound = true;
  }
}
