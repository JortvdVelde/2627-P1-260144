// Positie mario
let MarioX = 400 // X positie van mario
let MarioY = 510 // Y positie van mario

// Kleuren spel
let MarioKleur = [ // Kleuren van mario
  '#FE0100', // Petje en shirt
  '#5F1D00', // Schoenen en haar
  '#FFD6C0', // Lichaamskleur
  'black', // Snor en ogen
  '#1A2CFF', // Overal
  '#FFF934' // Knopen overal
];
let MarioKleurVies = '#A65B41'; // Kleur plekken die vies zijn

let MarioHongerKleur = 'green'; // Kleur geven aan circle statistiek honger
let MarioBlijKleur = 'green'; // Kleur geven aan circle statistiek blijheid
let MarioHygieneKleur = 'green'; // Kleur geven aan circle statistiek hygiene
let MarioEnergieKleur = 'green'; // Kleur geven aan circle statistiek energie
let MarioGezondheidKleur = 'green'; // Kleur geven aan circle statistiek gezondheid

// Gevoelens uiterlijk
let MarioHonger = 100;
let MarioBlij = 100;
let MarioHygiene = 100;
let MarioEnergie = 100;
let MarioGezondheid = 100;

// Inladen foto's
let Achtergrond; // foto van achtergrond
let Thermometer; // Inladen thermometer
let Hamburger; // foto van hamburger
let HamburgerRood; // foto van hamburger met rode praat wolk
let PlankStats; // Foto van getekende plank

let HongerIcon; // icon inladen voor honger
let BlijIcon; // Icon inladen voor blijheid
let HygieneIcon; // icon inladen voor hygiene
let EnergieIcon; // icon inladen voor energie
let GezondheidIcon; // icon inladen voor gezondheid

let EnergieWolk; // Foto praat wolk energie
let EnergieWolkRood; // Foto praat wolk energie rood

// Rond bewegen door de wereld
let MarioSnelheid = 5;

function preload() { // Inladen afbeeldingen
  Achtergrond = loadImage('Mario Achtergrond.png'); // Inladen achtergrond foto mario wereld
  Thermometer = loadImage('thermometer.png'); // Inladen thermometer voor gezondheid stat 
  Hamburger = loadImage('Praat wolk met hamburger.png'); // Inladen praat wolk met hamburger
  HamburgerRood = loadImage('Praat wolk rood met hamburger.png'); // inladen rode praat wolk met hamburger
  PlankStats = loadImage('plank stats circkels.png'); // Inladen plank voor de circkels met stats

  // Icons stats
  HongerIcon = loadImage('honger.png'); // inladen icon honger
  BlijIcon = loadImage('smiley.png'); // inladen smiley (icon blij)
  HygieneIcon = loadImage('hygiene.png'); // inladen hygiene icon
  EnergieIcon = loadImage('energie.png'); // inladen energie icon
  GezondheidIcon = loadImage('gezondheid.png'); // inladen gezondheid icon

  EnergieWolk = loadImage('Praat wolk met energie.png'); // inladen praat wolk met energie
  EnergieWolkRood = loadImage('Praat wolk rood met energie.png'); // inladen praat wolk rood met energie
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(Achtergrond); // Inladen foto achtergrond als achtergrond
  Mario();

  honger();
  Blijheid();
  Hygiene();
  Energie();
  gezondheid();

  Statistieken();
  bewegenWereld();


}

function Statistieken() {
  image(PlankStats, 95, -20, 600, 175);

  strokeWeight(1);
  fill(MarioHongerKleur); // Kleur mario wanneer mario honger heeft
  circle(210, 63, 70);
  image(HongerIcon, 180, 33, 60, 60); // Toevoegen van icon
  
  fill(MarioBlijKleur); // Kleur mario voor blijheid
  circle(300, 62, 70);
  image(BlijIcon, 260, 32, 80, 60)

  fill(MarioHygieneKleur); // Kleur mario zijn hygiene
  circle(390, 61, 70);
  image(HygieneIcon, 360, 31, 60, 70)
  
  fill(MarioEnergieKleur); // Kleur voor mario zijn energie level
  circle(480, 61, 70);
  image(EnergieIcon, 450, 31, 60, 60)
  
  
  fill(MarioGezondheidKleur); // Kleur mario zijn gezondheid
  circle(570, 61, 70);
  image(GezondheidIcon, 540, 31, 60, 60)


}

function Mario() { // Pixelart Mario
  strokeWeight(0);

  // Rij 1
  fill(MarioKleur[0]);
  rect(MarioX, MarioY, 60, 10);

  // Rij 2
  fill(MarioKleur[0]);
  rect(MarioX - 10, MarioY + 10, 100, 10);

  // Rij 3
  fill(MarioKleur[1]);
  rect(MarioX - 10, MarioY + 20, 30, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 20, MarioY + 20, 30, 10);
  fill(MarioKleur[3]);
  rect(MarioX + 50, MarioY + 20, 10, 10);

  // Rij 4
  fill(MarioKleur[1]);
  rect(MarioX - 20, MarioY + 30, 10, 10);
  fill(MarioKleur[2]);
  rect(MarioX - 10, MarioY + 30, 10, 10);
  fill(MarioKleur[1]);
  rect(MarioX, MarioY + 30, 10, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 10, MarioY + 30, 40, 10);
  fill(MarioKleur[3]);
  rect(MarioX + 50, MarioY + 30, 10, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 60, MarioY + 30, 30, 10);

  // Rij 5
  fill(MarioKleur[1]);
  rect(MarioX - 20, MarioY + 40, 10, 10);
  fill(MarioKleur[2]);
  rect(MarioX - 10, MarioY + 40, 10, 10);
  fill(MarioKleur[1]);
  rect(MarioX, MarioY + 40, 20, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 20, MarioY + 40, 40, 10);
  fill(MarioKleur[3]);
  rect(MarioX + 60, MarioY + 40, 10, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 70, MarioY + 40, 30, 10);

  // Rij 6
  fill(MarioKleur[1]);
  rect(MarioX - 20, MarioY + 50, 20, 10);
  fill(MarioKleur[2]);
  rect(MarioX, MarioY + 50, 50, 10);
  fill(MarioKleur[3]);
  rect(MarioX + 50, MarioY + 50, 40, 10);

  // Rij 7
  fill(MarioKleur[2]);
  rect(MarioX, MarioY + 60, 80, 10);

  // Rij 8
  fill('#FE0100');
  rect(MarioX - 10, MarioY + 70, 20, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 10, MarioY + 70, 10, 10);
  fill('#FE0100');
  rect(MarioX + 20, MarioY + 70, 40, 10);

  // Rij 9
  fill('#FE0100');
  rect(MarioX - 20, MarioY + 80, 30, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 10, MarioY + 80, 10, 10);
  fill('#FE0100');
  rect(MarioX + 20, MarioY + 80, 20, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 40, MarioY + 80, 10, 10);
  fill('#FE0100');
  rect(MarioX + 50, MarioY + 80, 30, 10);

  // Rij 10
  fill('#FE0100');
  rect(MarioX - 30, MarioY + 90, 40, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 10, MarioY + 90, 40, 10);
  fill('#FE0100');
  rect(MarioX + 50, MarioY + 90, 40, 10);

  // Rij 11
  fill(MarioKleur[2]);
  rect(MarioX - 30, MarioY + 100, 20, 10);
  fill('#FE0100');
  rect(MarioX - 10, MarioY + 100, 10, 10);
  fill(MarioKleur[4]);
  rect(MarioX, MarioY + 100, 10, 10);
  fill(MarioKleur[5]);
  rect(MarioX + 10, MarioY + 100, 10, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 20, MarioY + 100, 20, 10);
  fill(MarioKleur[5]);
  rect(MarioX + 40, MarioY + 100, 10, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 50, MarioY + 100, 10, 10);
  fill('#FE0100');
  rect(MarioX + 60, MarioY + 100, 10, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 70, MarioY + 100, 20, 10);

  // Rij 12
  fill(MarioKleur[2]);
  rect(MarioX - 30, MarioY + 110, 30, 10);
  fill(MarioKleur[4]);
  rect(MarioX, MarioY + 110, 60, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 60, MarioY + 110, 30, 10);

  // Rij 13
  fill(MarioKleur[2]);
  rect(MarioX - 30, MarioY + 120, 20, 10);
  fill(MarioKleur[4]);
  rect(MarioX - 10, MarioY + 120, 80, 10);
  fill(MarioKleur[2]);
  rect(MarioX + 70, MarioY + 120, 20, 10);

  // Rij 14
  fill(MarioKleur[4]);
  rect(MarioX - 10, MarioY + 130, 30, 10);
  fill(MarioKleur[4]);
  rect(MarioX + 50, MarioY + 130, 30, 10);

  // Rij 15
  fill('#783C00');
  rect(MarioX - 20, MarioY + 140, 30, 10);
  fill('#783C00');
  rect(MarioX + 50, MarioY + 140, 30, 10);

  // Rij 16
  fill('#783C00');
  rect(MarioX - 30, MarioY + 150, 40, 10);
  fill('#783C00');
  rect(MarioX + 50, MarioY + 150, 40, 10);
}

function bewegenWereld() { // Zorgen dat mario heen en weer kan gaan
  // Blokkeren dat mario de map uit kan
  if (MarioX >= 700) { // Zorgen dat hij niet verder dan 700 gaat
    MarioX = 700;
  }

  if (MarioX <= 30) { // Zorgen dat hij niet lager dan 30 gaat
    MarioX = 30;
  }

  // Zorgen voor beweging door de WASD of de pijltjes
  if (keyIsDown(68) || keyIsDown(39)) { // D of >
    MarioX = MarioX + MarioSnelheid;
  }

  if (keyIsDown(65) || keyIsDown(37)) { // A of <
    MarioX = MarioX - MarioSnelheid;
  }
}

function honger() { // Zorgen dat honger iets doet met de mario
  if (MarioHonger >= 51) { // Geen honger
    MarioSnelheid = 5; // Snelheid Mario
  }

  else if (MarioHonger <= 50 && MarioHonger >= 21) { // Meer honger
    image(Hamburger, MarioX + 60, MarioY - 100, 200, 200);
    MarioSnelheid = 2; // Snelheid Mario
  }

  else if (MarioHonger <= 20) { // Heel veel honger
    image(HamburgerRood, MarioX + 60, MarioY - 100, 200, 200);
    MarioSnelheid = 1; // Snelheid Mario
  }
}

function Blijheid() { // Zorgen dat als mario minder blij wordt dat dat iets doet
  if (MarioBlij >= 51) { // Hartstikke blij
    MarioSnelheid = 5; // Snelheid Mario
  }

  else if (MarioBlij <= 50 && MarioBlij >= 21) { // Normaal blij
    MarioSnelheid = 2; // Snelheid Mario
  }

  else if (MarioBlij <= 20) { // Niet blij
    MarioSnelheid = 1; // Snelheid Mario
  }
}

function Hygiene() { // Zorgen dat hygiene iets doet bij mario
  if (MarioHygiene >= 51) { // Schoon
    MarioSnelheid = 5; // Snelheid Mario
  }

  else if (MarioHygiene <= 50 && MarioHygiene >= 21) { // Beetje schoon
    MarioSnelheid = 2; // Snelheid Mario

    fill(MarioKleurVies);
    rect(MarioX + 30, MarioY + 10, 10, 20);
    rect(MarioX + 30, MarioY + 10, 20, 10);

    rect(MarioX + 10, MarioY + 60, 10, 20);
    rect(MarioX + 10, MarioY + 60, 20, 10);

    rect(MarioX + 60, MarioY + 90, 10, 20);
    rect(MarioX + 50, MarioY + 90, 20, 10);
  }

  else if (MarioHygiene <= 20) { // Niet schoon
    MarioSnelheid = 1; // Snelheid Mario

    fill(MarioKleurVies);
    rect(MarioX + 30, MarioY + 10, 10, 20);
    rect(MarioX + 30, MarioY + 10, 20, 10);

    rect(MarioX + 10, MarioY + 60, 10, 20);
    rect(MarioX + 10, MarioY + 60, 20, 10);

    rect(MarioX + 60, MarioY + 90, 10, 20);
    rect(MarioX + 50, MarioY + 90, 20, 10);

    rect(MarioX - 20, MarioY + 100, 10, 20);
    rect(MarioX - 30, MarioY + 100, 20, 10);

    rect(MarioX + 70, MarioY + 130, 10, 20);
    rect(MarioX + 60, MarioY + 130, 20, 10);

    rect(MarioX - 10, MarioY + 130, 10, 20);
    rect(MarioX - 10, MarioY + 130, 20, 10);

    rect(MarioX + 65, MarioY + 35, 10, 20);
    rect(MarioX + 65, MarioY + 35, 20, 10);
  }
}

function Energie() { // Zorgen dat weinig energie iets doet bij mario
  if (MarioHonger >= 51) { // Veel energie
    MarioSnelheid = 5; // Snelheid Mario
  }

  else if (MarioHonger <= 50 && MarioHonger >= 21) { // Minder energie
    MarioSnelheid = 2; // Snelheid Mario
    image(EnergieWolk, MarioX + 60, MarioY - 100, 200, 200);
  }

  else if (MarioHonger <= 20) { // Weinig energie
    MarioSnelheid = 1; // Snelheid Mario
    image(EnergieWolkRood, MarioX + 60, MarioY - 100, 200, 200);
  }
}

function gezondheid() { // Gevoelens (gezondheid)
  if (MarioGezondheid >= 51) { // Als mario gezond is
    MarioKleur[2] = '#FFD6C0'; // Lichaamskleur

    MarioSnelheid = 5; // Mario zijn snelheid
  }

  else if (MarioGezondheid <= 50 && MarioGezondheid >= 21) {
    MarioKleur[2] = '#96FFA9'; // Lichaamskleur

    MarioSnelheid = 2; // Snelheid verlagen mario
    image(Thermometer, MarioX + 77, MarioY - 30, 100, 100);

    fill('orange'); // Zorgen dat circle kleur krijgt
    circle(MarioX + 155, MarioY - 10, 20); // Circkel eind thermometer
  }

  else if (MarioGezondheid <= 20) {
    MarioKleur[2] = '#59FF78'; // Lichaamskleur

    MarioSnelheid = 1;
    image(Thermometer, MarioX + 77, MarioY - 30, 100, 100);

    fill('red'); // Zorgen dat circle kleur krijgt
    circle(MarioX + 155, MarioY - 10, 30); // Circkel eind thermometer
  }
}
