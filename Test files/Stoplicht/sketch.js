let TrafficColor = 0;
let TrafficTimer = 0

let TrafficUseTimer = false;


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

  // Timer
  TrafficTimer += deltaTime * 0.001;
  if(TrafficUseTimer == true) {
    if(TrafficColor >= 1) {
      TrafficColor = 0
    }

    if(TrafficColor >= 4) {
      TrafficColor = 1
    }

    if(TrafficColor >= 7) {
      TrafficColor = 2
    }

    if(TrafficColor >= 10) {
      TrafficColor = 0
    }
  }
}

function TrafficLight() {
  // Trafficcolor waarde een kleur geven
  if(TrafficColor == 0) {
    TrafficColor = 'green';
    fill(TrafficColor);
    circle(616, 256, 16);
  }

  if(TrafficColor == 1) {
    TrafficColor = 'orange';
    fill(TrafficColor);
    circle(616, 235, 16);
  }

  if(TrafficColor == 2) {
    TrafficColor = 'red';
    fill(TrafficColor);
    circle(616, 213, 16);
  }
}

function keyPressed() {
  // Zelfstandig aanpassen stoplicht (T)
  if(keyCode === 84) {
    TrafficColor ++;

    if(TrafficColor > 2) {
      TrafficColor = 0
    }
  }

  // Aan uit zetten automatische overgang (E)
  if(keyCode === 69 && TrafficUseTimer == false) {
    TrafficUseTimer = true;
  }

  else if(TrafficUseTimer == true) {
    TrafficUseTimer = false;
  }
}
