// Positie mario
let MarioX = 400 // X positie van mario
let MarioY = 510 // Y positie van mario

let MarioValSnelheid = 0; // Zorgen hoe hardt mario valt tijdens springen
let MarioSpringBlock = 0; // Zorgen dat je niet kan dubbel jumpen

// Kleuren spel
let MarioKleur = [ // Kleuren van mario
  '#FE0100', // Petje en shirt
  '#5F1D00', // haar
  '#FFD6C0', // Lichaamskleur
  'black', // Snor en ogen
  '#1A2CFF', // Overall
  '#FFF934', // Knopen overall
  '#783C00' // Schoenen
];
let MarioKleurVies = '#A65B41'; // Kleur plekken die vies zijn

let MarioStatsKleur = ['green', 'green', 'green', 'green', 'green']; // Kleur geven circle statistieken
// Honger - Blij - Hygiene - Energie - Gezondheid

// Statistieken
let MarioHonger = 100; // Honger stats laten beginnen bij 100
let MarioBlij = 100; // Blijheid stats laten beginnen bij 100
let MarioHygiene = 100; // Hygiene stats laten beginnen bij 100
let MarioEnergie = 100; // Energie stats laten beginnen bij 100
let MarioGezondheid = 100; // Gezondheid stats laten beginnen bij 100

// Statistieken
let PositieX = 120; // Begin X-positie meest linker blok stats
let PositieY = 120; // Begin Y-positie meest linker blok stats

// Inladen foto's
let Achtergrond; // foto van achtergrond
let Thermometer; // Inladen thermometer
let Hamburger; // foto van hamburger
let HamburgerRood; // foto van hamburger met rode praat wolk
let PlankStats; // Foto van getekende plank

let HongerIcon; // icon inladen voor honger
let BlijIcon; // Icon inladen voor blijheid
let BlijIconNeutraal; // Icon inladen voor blijheid neutraal face
let BlijIconSad; // icon inladen voor blijheid verdrietig face
let HygieneIcon; // icon inladen voor hygiene
let EnergieIcon; // icon inladen voor energie
let GezondheidIcon; // icon inladen voor gezondheid

let EnergieWolk; // Foto praat wolk energie
let EnergieWolkRood; // Foto praat wolk energie rood

let Grave; // foto graafsteen als mario dood is

// Datum wanneer mario dood is gegaan
let Datum;
let str;

// Rond bewegen door de wereld
let MarioSnelheid = 5; // Hoe snel mario kan bewegen

// Buttons
let MarioHongerButton; // Button voor eten geven
let MarioBlijButton; // Button om mario te entertainen
let MarioHygieneButton; // Button om schoon te maken
let MarioEnergieButton; // Button om te relaxen

function preload() { // Inladen afbeeldingen
  Achtergrond = loadImage('Mario Achtergrond.png'); // Inladen achtergrond foto mario wereld
  Thermometer = loadImage('thermometer.png'); // Inladen thermometer voor gezondheid stat 
  Hamburger = loadImage('Praat wolk met hamburger.png'); // Inladen praat wolk met hamburger
  HamburgerRood = loadImage('Praat wolk rood met hamburger.png'); // inladen rode praat wolk met hamburger
  PlankStats = loadImage('plank stats circkels.png'); // Inladen plank voor de circkels met stats
  EnergieWolk = loadImage('Praat wolk met energie V2.png'); // inladen praat wolk met energie
  EnergieWolkRood = loadImage('Praat wolk rood met energie V2.png'); // inladen praat wolk rood met energie
  Grave = loadImage('Grave.png'); // inladen foto grafsteen

  // Icons stats
  HongerIcon = loadImage('honger.png'); // inladen icon honger
  BlijIcon = loadImage('smiley.png'); // inladen smiley (icon blij)
  BlijIconNeutraal = loadImage('Smiley neutraal.png'); // inladen smiley neutraal (icon blij)
  BlijIconSad = loadImage('SmileySad.png'); // inladen smiley sad (icon blij)
  HygieneIcon = loadImage('hygiene.png'); // inladen hygiene icon
  EnergieIcon = loadImage('Bliksem.png'); // inladen energie icon
  GezondheidIcon = loadImage('gezondheid.png'); // inladen gezondheid icon
}

function setup() {
  Datum = new Date();

  str = "Mario is doodgegaan op " + Datum.getDate() + "-" + (Datum.getMonth() + 1) + "-" + Datum.getFullYear() + "!"

  console.log(str);
  createCanvas(800, 800);

  // Buttons aanmaken
  // Mario HONGER button
  MarioHongerButton = createButton('Eten geven');
  MarioHongerButton.position(PositieX + 8, 150);
  MarioHongerButton.size(100, 25);
  MarioHongerButton.mousePressed(MarioHongerButtonF);
  MarioHongerButton.style('font-size', '16px');

  // Mario BLIJ button
  MarioBlijButton = createButton('Entertainment');
  MarioBlijButton.position(PositieX + 118, 150);
  MarioBlijButton.size(100, 25);
  MarioBlijButton.mousePressed(MarioBlijButtonF);
  MarioBlijButton.style('font-size', '14px');

  // Mario HYGIENE button
  MarioHygieneButton = createButton('Schoonmaken');
  MarioHygieneButton.position(PositieX + 228, 150);
  MarioHygieneButton.size(100, 25);
  MarioHygieneButton.mousePressed(MarioHygieneButtonF);
  MarioHygieneButton.style('font-size', '14px');

  // Mario ENERGIE button
  MarioEnergieButton = createButton('Relaxen');
  MarioEnergieButton.position(PositieX + 338, 150);
  MarioEnergieButton.size(100, 25);
  MarioEnergieButton.mousePressed(MarioEnergieButtonF);
  MarioEnergieButton.style('font-size', '16px');
}

function draw() {
  background(Achtergrond); // Inladen foto achtergrond als achtergrond
  Mario(); // Pixelart

  honger(); // Honger bijhouden
  Blijheid(); // Blijheid bijhouden
  Hygiene(); // Hygiene bijhouden
  Energie(); // Energie bijhouden
  gezondheid(); // Gezondheid bijhouden

  Statistieken(); // Statistieken laten zien
  bewegenWereld(); // Zorgen dat de karakter kan bewegen
}

function Statistieken() {
  image(PlankStats, 40, -20, 700, 175);

  strokeWeight(4);
  fill(MarioStatsKleur[0]); // Kleur mario wanneer mario honger heeft
  circle(175, 63, 70); // Circle van statistieken
  image(HongerIcon, 145, 33, 60, 60); // Toevoegen van icon

  if (MarioHonger > 0) { // Zorgen dat het stopt als het op 0 is
    MarioHonger -= deltaTime * 0.002; // Zorgen dat het x aantal seconden duurt
  }

  fill(MarioStatsKleur[1]); // Kleur mario voor blijheid
  circle(285, 62, 70); // Circle van statistieken

  if (MarioBlij > 50) { // Als het 51 of erboven is
    image(BlijIcon, 245, 32, 80, 60); // Toevoegen van icon
    MarioStatsKleur[1] = 'green'; // Groene kleur geven aan circle
  }
  else if (MarioBlij <= 50 && MarioBlij >= 21) { // Als hij tussen de 50 en 21 is
    image(BlijIconNeutraal, 255, 32, 60, 60); // Toevoegen van icon
    MarioStatsKleur[1] = 'orange'; // Oranje kleur geven aan circle
  }
  else if (MarioBlij < 21) { // Als hij 20 is of er onder
    image(BlijIconSad, 255, 32, 60, 60); // Toevoegen van icon
    MarioStatsKleur[1] = 'red'; // Rode kleur geven aan circle
  }

  if (MarioBlij > 0) { // Zorgen dat het stopt als het op 0 is
    MarioBlij -= deltaTime * 0.0009; // Zorgen dat het x aantal seconden duurt
  }

  fill(MarioStatsKleur[2]); // Kleur mario zijn hygiene
  circle(390, 61, 70); // Circle van statistieken
  image(HygieneIcon, 360, 31, 60, 70) // Toevoegen van icon

  if (MarioHygiene > 0) { // Zorgen dat het stopt als het op 0 is
    MarioHygiene -= deltaTime * 0.001; // Zorgen dat het 2 seconden duurt
  }

  fill(MarioStatsKleur[3]); // Kleur voor mario zijn energie level
  circle(500, 61, 70); // Circle van statistieken
  image(EnergieIcon, 470, 31, 60, 60) // Toevoegen van icon

  if (MarioEnergie > 0) { // Zorgen dat het stopt als het op 0 is
    MarioEnergie -= deltaTime * 0.001; // Zorgen dat het x aantal seconden duurt
  }

  fill(MarioStatsKleur[4]); // Kleur mario zijn gezondheid
  circle(605, 61, 70); // Circle van statistieken
  image(GezondheidIcon, 575, 31, 60, 60) // Toevoegen van icon

  if (MarioHonger <= 0 && MarioGezondheid > 0
    || MarioBlij <= 0 && MarioGezondheid > 0
    || MarioHygiene <= 0 && MarioGezondheid > 0
    || MarioEnergie <= 0 && MarioGezondheid > 0) { // Zorgen dat het stopt als het op 0 is
    MarioGezondheid -= deltaTime * 0.002; // Zorgen dat het x aantal seconden duurt
  }

  // Mariohonger balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX, PositieY, MarioHonger, 20); // Positie balk bovenop

  // Mario blij balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 110, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 110, PositieY, MarioBlij, 20); // Positie balk bovenop

  // Mario Hygiene balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 220, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 220, PositieY, MarioHygiene, 20); // Positie balk bovenop

  // Mario Energie balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 330, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 330, PositieY, MarioEnergie, 20); // Positie balk bovenop

  // Mario gezondheid balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 440, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 440, PositieY, MarioGezondheid, 20); // Positie balk bovenop

  // Zorgen dat de stats op 0 gezet worden zodra mario dood is
  if (MarioGezondheid <= 0) {
    MarioStatsKleur[0] = 'red'; // Rood maken stats kleur circkel
    MarioStatsKleur[1] = 'red'; // Rood maken stats kleur circkel
    MarioStatsKleur[2] = 'red'; // Rood maken stats kleur circkel
    MarioStatsKleur[3] = 'red'; // Rood maken stats kleur circkel
    MarioStatsKleur[4] = 'red'; // Rood maken stats kleur circkel

    MarioHonger = 0; // Zorgen dat alle bars op 0 staan.
    MarioBlij = 0; // Zorgen dat alle bars op 0 staan.
    MarioHygiene = 0; // Zorgen dat alle bars op 0 staan.
    MarioEnergie = 0; // Zorgen dat alle bars op 0 staan.
    MarioGezondheid = 0; // Zorgen dat alle bars op 0 staan.
  }
}

function Mario() { // Pixelart Mario
  strokeWeight(0);

  if (MarioGezondheid > 0) {
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
    fill(MarioKleur[0]);
    rect(MarioX - 10, MarioY + 70, 20, 10);
    fill(MarioKleur[4]);
    rect(MarioX + 10, MarioY + 70, 10, 10);
    fill(MarioKleur[0]);
    rect(MarioX + 20, MarioY + 70, 40, 10);

    // Rij 9
    fill(MarioKleur[0]);
    rect(MarioX - 20, MarioY + 80, 30, 10);
    fill(MarioKleur[4]);
    rect(MarioX + 10, MarioY + 80, 10, 10);
    fill(MarioKleur[0]);
    rect(MarioX + 20, MarioY + 80, 20, 10);
    fill(MarioKleur[4]);
    rect(MarioX + 40, MarioY + 80, 10, 10);
    fill(MarioKleur[0]);
    rect(MarioX + 50, MarioY + 80, 30, 10);

    // Rij 10
    fill(MarioKleur[0]);
    rect(MarioX - 30, MarioY + 90, 40, 10);
    fill(MarioKleur[4]);
    rect(MarioX + 10, MarioY + 90, 40, 10);
    fill(MarioKleur[0]);
    rect(MarioX + 50, MarioY + 90, 40, 10);

    // Rij 11
    fill(MarioKleur[2]);
    rect(MarioX - 30, MarioY + 100, 20, 10);
    fill(MarioKleur[0]);
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
    fill(MarioKleur[0]);
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
    fill(MarioKleur[6]);
    rect(MarioX - 20, MarioY + 140, 30, 10);
    fill(MarioKleur[6]);
    rect(MarioX + 50, MarioY + 140, 30, 10);

    // Rij 16
    fill(MarioKleur[6]);
    rect(MarioX - 30, MarioY + 150, 40, 10);
    fill(MarioKleur[6]);
    rect(MarioX + 50, MarioY + 150, 40, 10);

    // Buttons
    MarioHongerButton.show(); // Button te voorschijn halen als mario nog leeft
    MarioBlijButton.show(); // Button te voorschijn halen als mario nog leeft
    MarioHygieneButton.show(); // Button te voorschijn halen als mario nog leeft
    MarioEnergieButton.show(); // Button te voorschijn halen als mario nog leeft
  }

  else if (MarioGezondheid <= 0) {
    image(Grave, MarioX, 527, 150, 150) // Zorgen dat er een grafsteen komt als mario dood is.
    textStyle(BOLD);
    fill('black');
    textSize(30);
    text(str, 150, 250); // Zorgen dat de tekst dat mario dood is gegaan in beeld komt

    // Buttons hiden
    MarioHongerButton.hide(); // Button weghalen als mario dood is
    MarioBlijButton.hide(); // Button weghalen als mario dood is
    MarioHygieneButton.hide(); // Button weghalen als mario dood is
    MarioEnergieButton.hide(); // Button weghalen als mario dood is
  }
}

function bewegenWereld() { // Zorgen dat mario heen en weer kan gaan
  // Blokkeren dat mario de map uit kan
  if (MarioX >= 830) { // Zorgen dat hij niet verder dan 700 gaat
    MarioX = -100;
  }

  if (MarioX <= -101) { // Zorgen dat hij niet lager dan 30 gaat
    MarioX = 830;
  }

  // Zorgen voor beweging door de WASD of de pijltjes
  if (keyIsDown(68) || keyIsDown(39)) { // D of >\
    if (MarioGezondheid > 0) { // Zorgen dat hij niet meer kan bewegen als mario dood is
      MarioX = MarioX + MarioSnelheid; // Voorruit lopen
    }
  }

  if (keyIsDown(65) || keyIsDown(37)) { // A of <
    if (MarioGezondheid > 0) { // Zorgen dat hij niet meer kan bewegen als mario dood is
      MarioX = MarioX - MarioSnelheid; // Achteruit lopen
    }
  }

  // Zorgen dat mario kan springen
  MarioY = MarioY += MarioValSnelheid * deltaTime * 0.001;
  MarioValSnelheid = MarioValSnelheid + 20;

  if (MarioValSnelheid > 0 && MarioY > 510) { // Zorgen dat hij stopt met vallen
    MarioY = 510; // Zorgen dat mario stopt met vallen bij Y 510
    MarioValSnelheid = 0;
    MarioSpringBlock = 0; // Resetten dat je weer kan springen
  }
}

function honger() { // Zorgen dat honger iets doet met de mario
  if (MarioHonger > 50) { // Geen honger
    MarioStatsKleur[0] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioHonger <= 50 && MarioHonger >= 21) { // Meer honger
    image(Hamburger, MarioX - 40, MarioY - 130, 200, 200); // Foto van praat wolk met een hamburger
    MarioStatsKleur[0] = 'orange'; // Kleur oranje geven aan stats
  }

  else if (MarioHonger < 21 && MarioGezondheid > 0) { // Heel veel honger
    image(HamburgerRood, MarioX - 40, MarioY - 130, 200, 200); // Foto van een rode praat wolk met een hamburger
    MarioStatsKleur[0] = 'red'; // Kleur red geven aan stats
  }
}

function Blijheid() { // Zorgen dat als mario minder blij wordt dat dat iets doet
  if (MarioBlij > 50) {
    MarioStatsKleur[1] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioBlij <= 50 && MarioBlij >= 21) { // Normaal blij
    MarioStatsKleur[1] = 'orange'; // Kleur oranje geven aan stats
    fill('#3D92BA'); // Kleur tranen
    rect(MarioX + 50, MarioY + 30, 10, 10); // Zorgen voor 1 blokje met tranen
  }

  else if (MarioBlij < 21 && MarioGezondheid > 0) { // Niet blij
    MarioStatsKleur[1] = 'red'; // Kleur red geven aan stats
    fill('#3D92BA');
    rect(MarioX + 50, MarioY + 30, 10, 20);
    rect(MarioX + 60, MarioY + 40, 10, 10);
    rect(MarioX + 40, MarioY + 40, 10, 20);
  }
}

function Hygiene() { // Zorgen dat hygiene iets doet bij mario
  if (MarioHygiene > 50) { // Schoon
    MarioStatsKleur[2] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioHygiene <= 50 && MarioHygiene >= 21) { // Beetje schoon
    MarioStatsKleur[2] = 'orange'; // Kleur oranje geven aan stats

    fill(MarioKleurVies);
    rect(MarioX + 30, MarioY + 10, 10, 20);
    rect(MarioX + 30, MarioY + 10, 20, 10);

    rect(MarioX + 10, MarioY + 60, 10, 20);
    rect(MarioX + 10, MarioY + 60, 20, 10);

    rect(MarioX + 60, MarioY + 90, 10, 20);
    rect(MarioX + 50, MarioY + 90, 20, 10);
  }

  else if (MarioHygiene < 21 && MarioGezondheid > 0) { // Niet schoon
    MarioStatsKleur[2] = 'red'; // Kleur rood geven aan stats

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
  if (MarioEnergie > 50) { // Veel energie
    MarioStatsKleur[3] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioEnergie <= 50 && MarioEnergie >= 21) { // Minder energie
    MarioStatsKleur[3] = 'orange'; // Kleur oranje geven aan stats
    image(EnergieWolk, MarioX + 60, MarioY - 130, 200, 200);
  }

  else if (MarioEnergie < 21 && MarioGezondheid > 0) { // Weinig energie
    MarioStatsKleur[3] = 'red'; // Kleur rood geven aan stats
    image(EnergieWolkRood, MarioX + 60, MarioY - 130, 200, 200);
  }
}

function gezondheid() { // Gevoelens (gezondheid)
  if (MarioGezondheid > 50) { // Als mario gezond is
    MarioKleur[2] = '#FFD6C0'; // Lichaamskleur
    MarioStatsKleur[4] = 'green'; // Kleur groen geven aan stats

    MarioSnelheid = 5; // Mario zijn snelheid
  }

  else if (MarioGezondheid <= 50 && MarioGezondheid >= 21) {
    MarioKleur[2] = '#96FFA9'; // Lichaamskleur
    MarioStatsKleur[4] = 'orange'; // Kleur oranje geven aan stats

    MarioSnelheid = 2; // Snelheid verlagen mario
    image(Thermometer, MarioX + 77, MarioY - 30, 100, 100);

    fill('orange'); // Zorgen dat circle kleur krijgt
    circle(MarioX + 155, MarioY - 10, 20); // Circkel eind thermometer
  }

  else if (MarioGezondheid < 21 && MarioGezondheid > 0) {
    MarioKleur[2] = '#59FF78'; // Lichaamskleur
    MarioStatsKleur[4] = 'red'; // Kleur rood geven aan stats

    MarioSnelheid = 1;
    image(Thermometer, MarioX + 77, MarioY - 30, 100, 100);

    fill('red'); // Zorgen dat circle kleur krijgt
    circle(MarioX + 155, MarioY - 10, 30); // Circkel eind thermometer
  }
}

function keyPressed() {
  // Zorgen voor springen
  if (keyCode === 32 && MarioSpringBlock == 0 || keyCode === 38 && MarioSpringBlock == 0) {
    MarioValSnelheid -= 800;
    MarioSpringBlock = 1; // Uitzetten dat je kan dubbeljumpen
  }
}

// Buttons
function MarioHongerButtonF() { // Mario eten geven button
  if (MarioHonger <= 90) { // Als het gelijk is of onder de 90
    MarioHonger = MarioHonger + 10; // De bar met 10 verhogen
  }

  else if (MarioHonger >= 91) { // Als het 91 of hoger is / blokkeren dat hij niet verder kan
    MarioHonger = 100; // De bar op 100 zetten
  }
}

function MarioBlijButtonF() { // Mario entertainen button
  if (MarioBlij <= 90) { // Als het gelijk is of onder de 90
    MarioBlij = MarioBlij + 10; // De bar met 10 verhogen
  }

  else if (MarioBlij >= 91) { // Als het 91 of hoger is / blokkeren dat hij niet verder kan
    MarioBlij = 100; // De bar op 100 zetten
  }
}

function MarioHygieneButtonF() { // Mario schoonmaken button
  if (MarioHygiene <= 90) { // Als het gelijk is of onder de 90
    MarioHygiene = MarioHygiene + 10; // De bar met 10 verhogen
  }

  else if (MarioHygiene >= 91) { // Als het 91 of hoger is / blokkeren dat hij niet verder kan
    MarioHygiene = 100; // De bar op 100 zetten
  }
}

function MarioEnergieButtonF() { // Mario relaxen button
  if (MarioEnergie <= 90) { // Als het gelijk is of onder de 90
    MarioEnergie = MarioEnergie + 10; // De bar met 10 verhogen
  }

  else if (MarioEnergie >= 91) { // Als het 91 of hoger is / blokkeren dat hij niet verder kan
    MarioEnergie = 100; // De bar op 100 zetten
  }
}