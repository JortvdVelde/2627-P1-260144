// Variablen zon
let sun = 200; // X-positie
let sunspeed = 0.5; // Snelheid van verplaatsing (Standaard 0.5)
let suny = 65; // Y-positie
let suna = 110; // Grootte zon achterkant
let sunv = 75; // Grootte zon voorkant
let day = true; // Schakeling of het dag of nacht is
let SunColor; // Zonkleur

// Variablen Clouds
let cloudslinks = 60;
let cloudsmidden = 300;
let cloudsrechts = 600;
let cloudssnel = 500;
let cloudsspeed = -0.5;
let cloudsspeedsnel = -1;
let CloudsColor;
let CloudsColorSh;

// Variablen Traffic Light
let TrafficColor = 0; // Standaard kleur van stoplicht (0 = groen).
let TrafficTimer = 0; // Zorgen dat de timer start op 0.

let TrafficUseTimer = false; // Checkt of de timer aan en uitstaat.
let TrafficOneRound = false; // Checkt of het stoplicht bezig is met een ronde.

// Variablen car
let car1v = 170;
let car1b = 280;
let carspeed1 = 2.2;
let car1ty = 300; // Auto 1 y-as blok toeter
let car1tw = 110; // Auto 1 Width blok toeter
let car1th = 75; // Auto 1 hoogte blok toeter

let car2v = 100;
let car2b = 210;
let carspeed2 = 2.8;
let car2ty = 250; // Auto 2 y-as blok toeter
let car2tw = 110; // Auto 2 Width blok toeter
let car2th = 75; // Auto 2 hoogte blok toeter

let car3v = 300;
let car3b = 410;
let carspeed3 = 3.2;
let car3ty = 250; // Auto 3 y-as blok toeter
let car3tw = 110; // Auto 3 Width blok toeter
let car3th = 75; // Auto 3 hoogte blok toeter

let car4v = 670;
let car4b = 780;
let carspeed0 = 2;
let car4ty = 300; // Auto 4 y-as blok toeter
let car4tw = 110; // Auto 4 Width blok toeter
let car4th = 75; // Auto 4 hoogte blok toeter

let HeadlightsColor = 'black'

// Sounds toeter
let toeter_druif;
let Auw_trap;
let RickRoll;
let Watermeloen;

// Variablen boom
let boomx = 62; // X-as bladeren
let boomy = 184; // Y-as bladeren
let boomys = 189; // Y-as bladeren schaduw
let boomspeed = 0.2; // Snelheid dat bladeren heen en weer gaan
let boomronde = false;
let boomTijd = 0;

// Lanterns
let LanternsX = 30;
let LanternsY = 175;
let LanternsColor = 'black';

function preload() {
  toeter_druif = loadSound('doei_druif.mp3');
  Auw_trap = loadSound('Auw_trap.mp3');
  RickRoll = loadSound('rick-roll-by-Tuna.mp3');
  Watermeloen = loadSound('Hallo, wat kost hier watermeloen_.mp3');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {

  // Variablen Strepen
  let LineStartXas = 0; // Startpunt streep (X-as)
  let LineEndXas = 50; // Streep lengte (Einde X-as)

  // Variablen bergen
  let mx = 100; // Bovenzijde X-as
  let rx = 250; // Rechterkant X-as
  let lx = -50; // Linkerkant X-as

  // Sun / Day-Night cyclus
  if (day == true) {
    suna = 110;
    SunColor = '#ffc900';
    background('#9bcef5');
    CloudsColor = 'white';
    CloudsColorSh = '#cfc4b4';
    LanternsColor = 'black';
    HeadlightsColor = 'black';
  }
  else {
    suna = 0;
    SunColor = '#e3e2c7';
    background('#383833');
    CloudsColor = '#69685b';
    CloudsColorSh = '#5e5e51';
    LanternsColor = '#dbd823';
    HeadlightsColor = '#dbd823';


  }

  fill(235, 150, 48, 100);
  circle(sun, suny, suna);
  fill(SunColor);
  circle(sun, suny, sunv);

  sun = sun + sunspeed;
  if (sun >= 855) {
    sun = -55;
  }

  if (sun == 854 && day == true) {
    day = false;
    console.log('Het is nacht!');
  }

  else if (sun == 854 && day == false) {
    day = true
    console.log('Het is dag!');
  }
  // Road
  fill('grey');
  rect(0, 300, 800, 100);

  // Roadmarking
  strokeWeight(8);
  stroke('lightgrey');
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  stroke('black');
  strokeWeight(0);

  // Bergen
  // Midden X-as, Midden Y-as, Rechts X-as, Rechts Y-as, Links X-as, Links Y-as 
  fill('#636e6c');
  triangle(mx, 125, rx, 285, lx, 285);

  mx = mx + 200;
  rx = rx + 200;
  lx = lx + 200;
  fill('#8d9e9b');
  triangle(mx, 50, rx, 285, lx, 285);

  mx = mx + 225;
  rx = rx + 225;
  lx = lx + 250;
  fill('#818786');
  triangle(mx, 145, rx, 285, lx, 285);

  mx = mx + 175;
  rx = rx + 175;
  lx = lx + 150;
  fill('#5d6664')
  triangle(mx, 115, rx, 285, lx, 285);

  // Grass
  fill('green');
  rect(0, 290, 800, 10);
  fill('darkgreen');
  rect(0, 284, 800, 6);

  // Trees
  boomTijd += 1
  if (boomTijd >= 30) {
    boomspeed = boomspeed * -1
  }

  boomTijd = boomTijd % 30
  // console.log(boomspeed);

  fill('#87622e');
  rect(53, 194, 20, 90);
  fill('#2b632e'); // Shadow
  boomx = boomx + boomspeed
  circle(boomx, 189, 60);
  circle(boomx + 23, 209, 60);
  circle(boomx - 22, 209, 60);
  fill('green') // Normal
  circle(boomx, 184, 60);
  circle(boomx + 23, 204, 60);
  circle(boomx - 22, 204, 60);

  fill('#87622e');
  rect(193, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(boomx + 140, 189, 60);
  circle(boomx + 163, 209, 60);
  circle(boomx + 118, 209, 60);
  fill('green') // Normal
  circle(boomx + 140, 184, 60);
  circle(boomx + 163, 204, 60);
  circle(boomx + 118, 204, 60);

  fill('#87622e');
  rect(443, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(boomx + 390, 189, 60);
  circle(boomx + 412, 209, 60);
  circle(boomx + 368, 209, 60);
  fill('green') // Normal
  circle(boomx + 390, 184, 60);
  circle(boomx + 412, 204, 60);
  circle(boomx + 368, 204, 60);

  fill('#87622e');
  rect(543, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(boomx + 490, 189, 60);
  circle(boomx + 513, 209, 60);
  circle(boomx + 468, 209, 60);
  fill('green') // Normal
  circle(boomx + 490, 184, 60);
  circle(boomx + 513, 204, 60);
  circle(boomx + 468, 204, 60);

  fill('#87622e');
  rect(693, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(boomx + 640, 189, 60);
  circle(boomx + 663, 209, 60);
  circle(boomx + 618, 209, 60);
  fill('green') // Normal
  circle(boomx + 640, 184, 60);
  circle(boomx + 663, 204, 60);
  circle(boomx + 618, 204, 60);

  // Clouds
  // Cloudslinks
  fill(CloudsColorSh); // Shadow
  circle(cloudslinks, 45, 50);
  circle(cloudslinks + 30, 40, 60);
  circle(cloudslinks + 60, 45, 50);
  fill(CloudsColor); // Normal
  circle(cloudslinks, 50, 50);
  circle(cloudslinks + 30, 45, 60);
  circle(cloudslinks + 60, 50, 50);

  cloudslinks = cloudslinks + cloudsspeed;
  if (cloudslinks <= -100) {
    cloudslinks = 900;
  }

  // Cloudsmidden
  fill(CloudsColorSh); // Shadow
  circle(cloudsmidden, 55, 50);
  circle(cloudsmidden + 30, 50, 60);
  circle(cloudsmidden + 60, 55, 50);
  fill(CloudsColor); // Normal
  circle(cloudsmidden, 60, 50);
  circle(cloudsmidden + 30, 55, 60);
  circle(cloudsmidden + 60, 60, 50);

  cloudsmidden = cloudsmidden + cloudsspeed;
  if (cloudsmidden <= -100) {
    cloudsmidden = 900;
  }

  // Cloudsrechts
  fill(CloudsColorSh); // Shadow
  circle(cloudsrechts, 40, 50);
  circle(cloudsrechts + 30, 35, 60);
  circle(cloudsrechts + 60, 40, 50);
  fill(CloudsColor); // Normal
  circle(cloudsrechts, 45, 50);
  circle(cloudsrechts + 30, 40, 60);
  circle(cloudsrechts + 60, 45, 50);

  cloudsrechts = cloudsrechts + cloudsspeed;
  if (cloudsrechts <= -100) {
    cloudsrechts = 900;
  }

  // Clouds snel
  fill(CloudsColorSh); // Shadow
  circle(cloudssnel, 40, 50);
  circle(cloudssnel + 30, 35, 60);
  circle(cloudssnel + 60, 40, 50);
  fill(CloudsColor); // Normal
  circle(cloudssnel, 45, 50);
  circle(cloudssnel + 30, 40, 60);
  circle(cloudssnel + 60, 45, 50);

  cloudssnel = cloudssnel + cloudsspeedsnel;
  if (cloudssnel <= -100) {
    cloudssnel = 900;
  }

  // Traffic light
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

    if (TrafficTimer >= 10) {
      TrafficColor = 2;
    }

    if (TrafficTimer >= 13) {
      TrafficColor = 0;
      TrafficTimer = 0;
      carspeed0 = 1.9;
      carspeed1 = 2.2;
      carspeed2 = 2.8;
      carspeed3 = 3.2;
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

    if (TrafficTimer >= 10) {
      TrafficColor = 2;
    }

    if (TrafficTimer >= 13) {
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

  // Lanterns
  fill('#575552')
  rect(LanternsX, LanternsY, 15, 125)
  fill(LanternsColor);
  circle(LanternsX + 7.5, LanternsY + 8, 13);

  fill('#575552')
  rect(LanternsX + 150, LanternsY, 15, 125)
  fill(LanternsColor);
  circle(LanternsX + 7.5 + 150, LanternsY + 8, 13);

  fill('#575552')
  rect(LanternsX + 300, LanternsY, 15, 125)
  fill(LanternsColor);
  circle(LanternsX + 7.5 + 300, LanternsY + 8, 13);

  fill('#575552')
  rect(LanternsX + 450, LanternsY, 15, 125)
  fill(LanternsColor);
  circle(LanternsX + 7.5 + 450, LanternsY + 8, 13);

  fill('#575552')
  rect(LanternsX + 605, LanternsY, 15, 125)
  fill(LanternsColor);
  circle(LanternsX + 7.5 + 605, LanternsY + 8, 13);

  fill('#575552')
  rect(LanternsX + 750, LanternsY, 15, 125)
  fill(LanternsColor);
  circle(LanternsX + 7.5 + 750, LanternsY + 8, 13);

  // Blauwe auto
  fill('blue');
  rect(car2v, 250, 110, 75, 10);
  rect(car2b, 290, 20, 30);
  fill('black');
  circle(car2v + 20, 325, 30);
  circle(car2b - 10, 325, 30);
  fill(HeadlightsColor);
  circle(car2b + 20, 295, 10);

  if (car2v >= 900) {
    car2v = -250
    car2b = -140
  }

  if (day == false) {
    fill(219, 216, 35, 100);
    triangle(car2b + 15, 295, car2b + 100, 315, car2b + 100, 275);
  }

  // Rode auto
  fill('red');
  rect(car3v, 250, 110, 75, 10);
  rect(car3b, 290, 20, 30);
  fill('black');
  circle(car3v + 20, 325, 30);
  circle(car3b - 10, 325, 30);
  fill(HeadlightsColor);
  circle(car3b + 20, 295, 10);

  if (car3v >= 900) {
    car3v = -250
    car3b = -140
  }

  if (day == false) {
    fill(219, 216, 35, 100);
    triangle(car3b + 15, 295, car3b + 100, 315, car3b + 100, 275);
  }

  // Licht blauwe auto
  fill('lightblue');
  rect(car1v, 300, 110, 75, 10);
  rect(car1b, 340, 20, 30);
  fill('black');
  circle(car1v + 20, 375, 30);
  circle(car1b - 10, 375, 30);
  fill(HeadlightsColor);
  circle(car1b + 20, 345, 10);

  if (car1v >= 900) {
    car1v = -250
    car1b = -140
  }

  if (day == false) {
    fill(219, 216, 35, 100);
    triangle(car1b + 15, 345, car1b + 100, 365, car1b + 100, 325);
  }

  // Licht groene auto
  fill('lightgreen');
  rect(car4v, 300, 110, 75, 10);
  rect(car4b, 340, 20, 30);
  fill('black');
  circle(car4v + 20, 375, 30);
  circle(car4b - 10, 375, 30);
  fill(HeadlightsColor);
  circle(car4b + 20, 345, 10);

  if (car4v >= 900) {
    car4v = -250
    car4b = -140
  }

  if (day == false) {
    fill(219, 216, 35, 100);
    triangle(car4b + 15, 345, car4b + 100, 365, car4b + 100, 325);
  }
}

function keyPressed() {
  // Bij het drukken op D wordt dag nacht of andersom.
  if (keyCode === 68) {
    if (day == false) {
      day = true
    }
    else {
      day = false
    }
  }

  // Zelfstandig aanpassen stoplicht (T)
  if (keyCode === 84) {
    TrafficColor++;

    if (TrafficColor > 2) {
      TrafficColor = 0;
    }
    if (TrafficColor == 0) {
      carspeed0 = 1.9;
      carspeed1 = 2.2;
      carspeed2 = 2.8;
      carspeed3 = 3.2;
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

// Toeter als je op de muis klikt
function mousePressed() {
  if (mouseX > car1v && mouseX < car1v + car1tw &&
    mouseY > car1ty && mouseX < car1ty + car1th) {
    if (Auw_trap.isPlaying()) {
      Auw_trap.stop();
    }
    else {
      Auw_trap.play();
      console.log('Toeter van Timo!');
    }
  }

  if (mouseX > car2v && mouseX < car2v + car2tw &&
    mouseY > car2ty && mouseY < car2ty + car2th) {
    if (toeter_druif.isPlaying()) {
      toeter_druif.stop();
    }
    else {
      toeter_druif.play();
      console.log('Toeter van druif.');
    }
  }

  if (mouseX > car3v && mouseX < car3v + car3tw &&
    mouseY > car3ty && mouseX < car3ty + car3th) {
    if (RickRoll.isPlaying()) {
      RickRoll.stop();
    }
    else {
      RickRoll.play();
      console.log('Toeter van Rick.');
    }
  }

  if (mouseX > car4v && mouseX < car4v + car4tw &&
    mouseY > car4ty && mouseX < car4ty + car4th) {
    if (Watermeloen.isPlaying()) {
      Watermeloen.stop();
    }
    else {
      Watermeloen.play();
      console.log('Fietsbel van klant.');
    }
  }
}