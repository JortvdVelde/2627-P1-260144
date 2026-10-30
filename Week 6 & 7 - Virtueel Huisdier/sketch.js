// Positie mario
let MarioX = 400 // X positie van mario
let MarioY = 510 // Y positie van mario
let MarioSnelheid = 5; // Hoe snel mario kan bewegen

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

// Honger - Blij - Hygiene - Energie - Gezondheid
let MarioStatsKleur = ['green', 'green', 'green', 'green', 'green']; // Kleur geven circle statistieken
let MarioStats = [100, 100, 100, 100, 100]; // Stats maxs
let decayRates = [0.002, 0.001, 0.001, 0.001, 0.002]; // standaard decay als je speelt.

// Zorgen voor props stats
let TVOnOff = 0; // Zorgen fat de TV verschijnt of weggaat.
let TVPlaying = 0; // Zorgen dat stats stoppen als video aanstaat
let TVTimer = 48; // Zorgen dat de video weggaat na de timer

let TVX = 10; // X-positie tv beeldscherm
let TVY = 440; // Y-positie tv beeldscherm
let TVL = 350; // Lengte tv
let TVB = 250; // Breedte tv

let BankOnOff = 0; // Bijhouden of de bank er staat.
let TafelOnOff = 0; // Bijhouden of de tafel er staat
let DoucheOnOff = 0; // Bijhouden of de douche aan moet

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
let TVBlij; // Foto tv voor blijheid
let FotoBank; // Foto bank voor energiebutton
let Tafel; // Foto van tafel met eten
let FotoDouche; // foto van douche zonder water
let FotoDoucheWater; // Foto van douche met water

// Inladen geluid
let MarioDeath; // Geluid als mario dood gaat
let MarioSpring; // Geluid als mario springt
let MarioAchtergrondSound; // Geluid voor op de achtergrond

let MarioDeathSound = 0; // Check of het geluid al speelt of heeft gespeeld
let AchtergrondPlaying = 0; // Check of het geluid al speelt
let AchtergrondTimer = 188; // aantal seconden dat het geluid op de achtergrond duurt

// Inladen video
let BlijVideo; // Video entertainment

// Datum wanneer mario dood is gegaan
let Datum;
let str;

// Buttons
let MarioHongerButton; // Button voor eten geven
let MarioBlijButton; // Button om mario te entertainen
let MarioHygieneButton; // Button om schoon te maken
let MarioEnergieButton; // Button om te relaxen
let ResetGame; // Button om te resetten

let TestDoor;
let OfflineProgress = []; // Zorgen dat offline de stats doorgaan

function preload() { // Inladen afbeeldingen & Video's
  // Afbeeldingen
  Achtergrond = loadImage('Mario Achtergrond.png'); // Inladen achtergrond foto mario wereld
  Thermometer = loadImage('thermometer.png'); // Inladen thermometer voor gezondheid stat 
  Hamburger = loadImage('Praat wolk met hamburger.png'); // Inladen praat wolk met hamburger
  HamburgerRood = loadImage('Praat wolk rood met hamburger.png'); // inladen rode praat wolk met hamburger
  PlankStats = loadImage('plank stats circkels.png'); // Inladen plank voor de circkels met stats
  EnergieWolk = loadImage('Praat wolk met energie V2.png'); // inladen praat wolk met energie
  EnergieWolkRood = loadImage('Praat wolk rood met energie V2.png'); // inladen praat wolk rood met energie
  Grave = loadImage('Grave.png'); // inladen foto grafsteen
  TVBlij = loadImage('TV-Blijheid - WB.png'); // inladen foto tv
  FotoBank = loadImage('Bank.png'); // in laden foto bank
  Tafel = loadImage('Tafel met eten.png'); // in laden foto tafel met eten
  FotoDouche = loadImage('Douche zonder water.png'); // inladen foto van douche
  FotoDoucheWater = loadImage('Douche met water.png'); // inladen foto van douche met water

  // Icons stats
  HongerIcon = loadImage('honger.png'); // inladen icon honger
  BlijIcon = loadImage('smiley.png'); // inladen smiley (icon blij)
  BlijIconNeutraal = loadImage('Smiley neutraal.png'); // inladen smiley neutraal (icon blij)
  BlijIconSad = loadImage('SmileySad.png'); // inladen smiley sad (icon blij)
  HygieneIcon = loadImage('hygiene.png'); // inladen hygiene icon
  EnergieIcon = loadImage('Bliksem.png'); // inladen energie icon
  GezondheidIcon = loadImage('gezondheid.png'); // inladen gezondheid icon

  // Video's
  BlijVideo = createVideo('Huisdier - Blijheid.mp4'); // inladen video voor de bijheid

  // Geluiden
  MarioDeath = loadSound('Mario Death.mp3'); // Geluid als mario dood gaat
  MarioSpring = loadSound('Mario Spring.mp3'); // Geluid als mario springt
  MarioAchtergrondSound = loadSound('Achtergrondmuziek.mp3'); // Geluid voor op de achtergrond.
}

function setup() {
  Datum = new Date();
  str = "Mario is doodgegaan op " + Datum.getDate() + "-" + (Datum.getMonth() + 1) + "-" + Datum.getFullYear() + "!"

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

  // Reset game button
  ResetGame = createButton('Reset');
  ResetGame.position(320, 290);
  ResetGame.size(200, 75);
  ResetGame.mousePressed(resetGameButton);
  ResetGame.style('font-size', '24px');

  BlijVideo.hide(); // Zorgen dat de video er niet staat

  // Data ophalen
  MarioX = getItem("MarioX"); // Ophalen welke waarde MarioX had
  MarioY = getItem("MarioY"); // Ophalen welke waarde MarioY had
  MarioSnelheid = getItem("MarioSnelheid"); // Ophalen welke waarde MarioSnelheid had

  MarioStats = getItem("Statistieken"); // Ophalen welke waarde MarioStats had

  if (MarioStatsKleur == null) {
    MarioStatsKleur = ['green', 'green', 'green', 'green', 'green'];
  }

  // Zorgen dat stats omlaag gaan als je niet speelt
  let VorigeDatum = getItem("Datum Offline"); // Datum voor de vorige datum

  if (VorigeDatum != null) { // Check of er al een keer eerder gespeeld is
    let nu = Date.now();

    let difference = (nu - VorigeDatum); //de delta tijd tussen vorige en huidige sessie in ms
    let aantalMSVoorLeeg = 1000 * 60 * 60 * 10;  // Invullen hoeveel milliseconden het duurt voordat een bar leeg is als je NIET speelt.
    let percentageVanMaxWegGeweest = 100 / aantalMSVoorLeeg * difference; // Berekening om verschil te berekenen
    console.log("Je bent offline geweest voor " + percentageVanMaxWegGeweest + " uur.");

    // Toepassen van het verschil
    for (let index = 0; index < 4; index++) {
      MarioStats[index] = MarioStats[index] - percentageVanMaxWegGeweest; // Berekenen hoeveel eraf moet
    }

    for (let i = 0; i < 4; i++) {
      let statOnderDeNul = abs(min(MarioStats[0], 0)); // Hoeveel het onder de nul gaat
      let statOnderDeNulTijd = statOnderDeNul / decayRates[i]; // Hoeveel tijd (seconden) we onder de nul hebben gezeten met honger
      let healthPenalty = statOnderDeNulTijd * 0.00001; // Hoeveel gaat er van de health af per seconde dat iemand een stat onder nul had
      MarioStats[4] -= healthPenalty; // Straf voor de stat te lang onder nu nul hebben op de health
    }
  }
  else {
    console.log("Geen eerdere inlogdatum gevonden.");
  }
}

function draw() {
  ResetGame.hide() // hiden van button om te resetten

  // Zorgen dat de bars niet onder de 0 of boven de 100 uitkomen
  for (let index = 0; index < 5; index++) {
    if (MarioStats[index] < 0) {
      MarioStats[index] = 0;
    }

    else if (MarioStats[index] > 100) {
      MarioStats[index] = 100
    }
  }

  if (TVPlaying == 0) { // Check of tv uit is
    background(Achtergrond); // Inladen foto achtergrond als achtergrond
    image(FotoDouche, 607, 440, 140, 200); // Foto van douche zonder water

    if (AchtergrondPlaying == 0) { // Check of het al speelt
      MarioAchtergrondSound.getLevel(2)
      MarioAchtergrondSound.play();
      AchtergrondPlaying = 1; // Zorgen dat het niet nog een keer tegelijk gaat spelen
    }

    AchtergrondTimer -= deltaTime * 0.001; // Timer om nog een keer te laten spelen

    if (AchtergrondTimer <= 0) {
      AchtergrondTimer = 188; // Timer resetten
      MarioAchtergrondSound.stop(); // Geluid stoppen
      AchtergrondPlaying = 0; // Open zetten dat het nog een keer afgespeelt kan worden
    }
  }

  if (TVOnOff == 1) { // Zorgen dat het er alleen staat als het moet
    image(TVBlij, TVX, TVY, TVL, TVB); // Zorgen dat de tv er komt te staan
  }

  if (DoucheOnOff == 1) { // Checken of de douche aan moet
    douche();
  }

  if (BankOnOff == 1) { // Checken of de bank aan moet
    bank()
  }

  if (TVPlaying == 0) { // Zorgen dat het er alleen staat als de tv niet iets afspeelt
    Mario(); // Pixelart

    honger(); // Honger bijhouden
    Blijheid(); // Blijheid bijhouden
    Hygiene(); // Hygiene bijhouden
    Energie(); // Energie bijhouden
    gezondheid(); // Gezondheid bijhouden

    Statistieken(); // Statistieken laten zien
    bewegenWereld(); // Zorgen dat de karakter kan bewegen

    MarioHongerButton.show(); // Zorgen dat de button er staat
    MarioBlijButton.show(); // Zorgen dat de button er staat
    MarioHygieneButton.show(); // Zorgen dat de button er staat
    MarioEnergieButton.show(); // Zorgen dat de button er staat
  }

  else if (TVPlaying == 1) { // Zorgen dat het er alleen staat als de tv iets afspeelt
    TV(); // Zorgen dat de video op het beeld staat
    MarioAchtergrondSound.stop() // Achtergrondgeluid uitzetten
  }

  if (TafelOnOff == 1) { // Checken of de tafel aanmoet
    tafelEten()
  }

  datastorage() // aanroepen dat de opslag iets mag doen
}

function Statistieken() {
  image(PlankStats, 40, -20, 700, 175);

  // Honger
  strokeWeight(4);
  fill(MarioStatsKleur[0]); // Kleur mario wanneer mario honger heeft
  circle(175, 63, 70); // Circle van statistieken
  image(HongerIcon, 145, 33, 60, 60); // Toevoegen van icon

  if (MarioStats[0] > 0 && TVPlaying == 0) { // Zorgen dat het stopt als het op 0 is en dat de tv uitstaat
    MarioStats[0] -= deltaTime * decayRates[0]; // Zorgen dat het x aantal seconden duurt
  }

  // Blijheid
  fill(MarioStatsKleur[1]); // Kleur mario voor blijheid
  circle(285, 62, 70); // Circle van statistieken

  if (MarioStats[1] > 50) { // Als het 51 of erboven is
    image(BlijIcon, 245, 32, 80, 60); // Toevoegen van icon
    MarioStatsKleur[1] = 'green'; // Groene kleur geven aan circle
  }
  else if (MarioStats[1] <= 50 && MarioStats[1] >= 21) { // Als hij tussen de 50 en 21 is
    image(BlijIconNeutraal, 255, 32, 60, 60); // Toevoegen van icon
    MarioStatsKleur[1] = 'orange'; // Oranje kleur geven aan circle
  }
  else if (MarioStats[1] < 21) { // Als hij 20 is of er onder
    image(BlijIconSad, 255, 32, 60, 60); // Toevoegen van icon
    MarioStatsKleur[1] = 'red'; // Rode kleur geven aan circle
  }

  if (MarioStats[1] > 0 && TVPlaying == 0) { // Zorgen dat het stopt als het op 0 is en check of de tv uit is
    MarioStats[1] -= deltaTime * decayRates[1]; // Zorgen dat het x aantal seconden duurt
  }

  // Hygiene
  fill(MarioStatsKleur[2]); // Kleur mario zijn hygiene
  circle(390, 61, 70); // Circle van statistieken
  image(HygieneIcon, 360, 31, 60, 70) // Toevoegen van icon

  if (MarioStats[2] > 0 && TVPlaying == 0) { // Zorgen dat het stopt als het op 0 is en check of tv uit is
    MarioStats[2] -= deltaTime * decayRates[2]; // Zorgen dat het 2 seconden duurt
  }

  // Energie
  fill(MarioStatsKleur[3]); // Kleur voor mario zijn energie level
  circle(500, 61, 70); // Circle van statistieken
  image(EnergieIcon, 470, 31, 60, 60) // Toevoegen van icon

  if (MarioStats[3] > 0 && TVPlaying == 0 && BankOnOff == 0) { // Zorgen dat het stopt als het op 0 is en check of tv uit is
    MarioStats[3] -= deltaTime * decayRates[3]; // Zorgen dat het x aantal seconden duurt
  }
  
  // Gezondheid
  fill(MarioStatsKleur[4]); // Kleur mario zijn gezondheid
  circle(605, 61, 70); // Circle van statistieken
  image(GezondheidIcon, 575, 31, 60, 60) // Toevoegen van icon

  if (MarioStats[0] <= 0 && MarioStats[4] > 0
    || MarioStats[1] <= 0 && MarioStats[4] > 0
    || MarioStats[2] <= 0 && MarioStats[4] > 0
    || MarioStats[3] <= 0 && MarioStats[4] > 0 && TVPlaying == 0) { // Zorgen dat het stopt als het op 0 is en check of de tv uit is
    MarioStats[4] -= deltaTime * decayRates[4]; // Zorgen dat het x aantal seconden duurt
  }

  // Mariohonger balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX, PositieY, MarioStats[0], 20); // Positie balk bovenop

  // Mario blij balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 110, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 110, PositieY, MarioStats[1], 20); // Positie balk bovenop

  // Mario Hygiene balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 220, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 220, PositieY, MarioStats[2], 20); // Positie balk bovenop

  // Mario Energie balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 330, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 330, PositieY, MarioStats[3], 20); // Positie balk bovenop

  // Mario gezondheid balk
  strokeWeight(2); // Dikte balk achterzijde
  fill('red'); // Kleur balk achter
  rect(PositieX + 440, PositieY, 100, 20); // Balk onderop
  fill('green'); // Kleur balk bovenop
  strokeWeight(2); // Dikte balk bovenop
  rect(PositieX + 440, PositieY, MarioStats[4], 20); // Positie balk bovenop

  // Zorgen dat de stats op 0 gezet worden zodra mario dood is
  if (MarioStats[4] <= 0) {
    for (let index = 0; index < 5; index++) {
      MarioStatsKleur[index] = 'red' // Rood maken stats kleur
    }

    for (let index = 0; index < 5; index++) {
      MarioStats[index] = 0 // Alle balken op 0 zetten
    }
  }
}

function Mario() { // Pixelart Mario en aansturing mario dood of niet
  strokeWeight(0);

  if (MarioStats[4] > 0) {
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

    // Laat username zien van mario
    textStyle(BOLD);
    fill('black');
    textSize(25);
    text("Mario", MarioX, MarioY - 10);
  }

  else if (MarioStats[4] <= 0) {
    if (BankOnOff == 0) { // Checken of het op de bank moet staan
      image(Grave, MarioX, 527, 150, 150) // Zorgen dat er een grafsteen komt als mario dood is.
    }

    else if (BankOnOff == 1) { // Checken of het op de bank moet staan
      image(Grave, MarioX, MarioY + 20, 150, 150) // Zorgen dat er een grafsteen komt als mario dood is.
    }

    if (MarioDeathSound == 0) { // Controle of het al een keer is afgespeelt
      MarioAchtergrondSound.stop() // Achtergrond muziek stoppen
      MarioDeath.play(); // Afspelen geluid als mario dood gaat
      MarioDeathSound = 1; // Zorgen dat het niet nog een keer afspeelt
    }

    textStyle(BOLD);
    fill('black');
    textSize(30);
    text(str, 150, 250); // Zorgen dat de tekst dat mario dood is gegaan in beeld komt

    // Buttons hiden
    MarioHongerButton.hide(); // Button weghalen als mario dood is
    MarioBlijButton.hide(); // Button weghalen als mario dood is
    MarioHygieneButton.hide(); // Button weghalen als mario dood is
    MarioEnergieButton.hide(); // Button weghalen als mario dood is

    // Button show
    ResetGame.show() // Button om te resetten laten zien
  }
}

function bewegenWereld() { // Zorgen dat mario heen en weer kan gaan
  // Blokkeren dat mario de map uit kan
  if (MarioX >= 830) { // Zorgen dat hij niet verder dan 830 gaat
    MarioX = -100; // Terug zetten naar de andere kant
  }

  if (MarioX <= -101) { // Zorgen dat hij niet lager dan -101 gaat
    MarioX = 830; // Terugzetten naar de andere kant
  }

  // Zorgen voor beweging door de WASD of de pijltjes
  if (keyIsDown(68) || keyIsDown(39)) { // D of >\
    if (MarioStats[4] > 0) { // Zorgen dat hij niet meer kan bewegen als mario dood is
      MarioX = MarioX + MarioSnelheid; // Voorruit lopen
    }
  }

  if (keyIsDown(65) || keyIsDown(37)) { // A of <
    if (MarioStats[4] > 0) { // Zorgen dat hij niet meer kan bewegen als mario dood is
      MarioX = MarioX - MarioSnelheid; // Achteruit lopen
    }
  }

  // Zorgen dat mario kan springen
  if (MarioStats[4] > 0 || BankOnOff == 0) {
    MarioY = MarioY += MarioValSnelheid * deltaTime * 0.001;
    MarioValSnelheid = MarioValSnelheid + 20;

    if (MarioValSnelheid > 0 && MarioY > 510) { // Zorgen dat hij stopt met vallen
      MarioY = 510; // Zorgen dat mario stopt met vallen bij Y 510
      MarioValSnelheid = 0;
      MarioSpringBlock = 0; // Resetten dat je weer kan springen
    }
  }
}

function honger() { // Zorgen dat honger iets doet met de mario
  if (MarioStats[0] > 50) { // Geen honger
    MarioStatsKleur[0] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioStats[0] <= 50 && MarioStats[0] >= 21) { // Meer honger
    image(Hamburger, MarioX - 40, MarioY - 130, 200, 200); // Foto van praat wolk met een hamburger
    MarioStatsKleur[0] = 'orange'; // Kleur oranje geven aan stats
  }

  else if (MarioStats[0] < 21 && MarioStats[4] > 0) { // Heel veel honger
    image(HamburgerRood, MarioX - 40, MarioY - 130, 200, 200); // Foto van een rode praat wolk met een hamburger
    MarioStatsKleur[0] = 'red'; // Kleur red geven aan stats
  }
}

function Blijheid() { // Zorgen dat als mario minder blij wordt dat dat iets doet
  if (MarioStats[1] > 50) {
    MarioStatsKleur[1] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioStats[1] <= 50 && MarioStats[1] >= 21) { // Normaal blij
    MarioStatsKleur[1] = 'orange'; // Kleur oranje geven aan stats
    fill('#3D92BA'); // Kleur tranen
    rect(MarioX + 50, MarioY + 30, 10, 10); // Zorgen voor 1 blokje met tranen
  }

  else if (MarioStats[1] < 21 && MarioStats[4] > 0) { // Niet blij
    MarioStatsKleur[1] = 'red'; // Kleur red geven aan stats
    fill('#3D92BA');
    rect(MarioX + 50, MarioY + 30, 10, 20);
    rect(MarioX + 60, MarioY + 40, 10, 10);
    rect(MarioX + 40, MarioY + 40, 10, 20);
  }
}

function Hygiene() { // Zorgen dat hygiene iets doet bij mario
  if (MarioStats[2] > 50) { // Schoon
    MarioStatsKleur[2] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioStats[2] <= 50 && MarioStats[2] >= 21) { // Beetje schoon
    MarioStatsKleur[2] = 'orange'; // Kleur oranje geven aan stats

    fill(MarioKleurVies);
    rect(MarioX + 30, MarioY + 10, 10, 20);
    rect(MarioX + 30, MarioY + 10, 20, 10);

    rect(MarioX + 10, MarioY + 60, 10, 20);
    rect(MarioX + 10, MarioY + 60, 20, 10);

    rect(MarioX + 60, MarioY + 90, 10, 20);
    rect(MarioX + 50, MarioY + 90, 20, 10);
  }

  else if (MarioStats[2] < 21 && MarioStats[4] > 0) { // Niet schoon
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
  if (MarioStats[3] > 50) { // Veel energie
    MarioStatsKleur[3] = 'green'; // Kleur groen geven aan stats
  }

  else if (MarioStats[3] <= 50 && MarioStats[3] >= 21) { // Minder energie
    MarioStatsKleur[3] = 'orange'; // Kleur oranje geven aan stats
    image(EnergieWolk, MarioX + 60, MarioY - 130, 200, 200); // Afbeelding wolk dat mario energie nodig heeft
  }

  else if (MarioStats[3] < 21 && MarioStats[4] > 0) { // Weinig energie
    MarioStatsKleur[3] = 'red'; // Kleur rood geven aan stats
    image(EnergieWolkRood, MarioX + 60, MarioY - 130, 200, 200); // Afbeelding rode wolk dat mario energie nodig heeft
  }
}

function gezondheid() { // Gevoelens (gezondheid)
  if (MarioStats[4] > 50) { // Als mario gezond is
    MarioKleur[2] = '#FFD6C0'; // Lichaamskleur
    MarioStatsKleur[4] = 'green'; // Kleur groen geven aan stats

    MarioSnelheid = 5; // Mario zijn snelheid
  }

  else if (MarioStats[4] <= 50 && MarioStats[4] >= 21) {
    MarioKleur[2] = '#96FFA9'; // Lichaamskleur
    MarioStatsKleur[4] = 'orange'; // Kleur oranje geven aan stats

    MarioSnelheid = 2; // Snelheid verlagen mario
    image(Thermometer, MarioX + 77, MarioY - 30, 100, 100);

    fill('orange'); // Zorgen dat circle kleur krijgt
    circle(MarioX + 155, MarioY - 10, 20); // Circkel eind thermometer
  }

  else if (MarioStats[4] < 21 && MarioStats[4] > 0) {
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
  if (keyCode === 32 && MarioSpringBlock == 0 && TVPlaying == 0 || keyCode === 38 && MarioSpringBlock == 0 && TVPlaying == 0) {
    MarioValSnelheid -= 800;
    MarioSpringBlock = 1; // Uitzetten dat je kan dubbeljumpen
    MarioSpring.play(); // Zorgen voor spring geluid
  }
}

// Buttons
function MarioHongerButtonF() { // Mario eten geven button
  // Zorgen dat de juiste function wordt aangeroepen
  if (TafelOnOff == 0 && BankOnOff == 0 && DoucheOnOff == 0) {
    TafelOnOff = 1;
  }

  else if (TafelOnOff == 1) {
    TafelOnOff = 0;
  }
}

function MarioBlijButtonF() { // Mario entertainen button
    // Zorgen dat de juiste function wordt aangeroepen
  if (TVOnOff == 0 && BankOnOff == 0 && DoucheOnOff == 0 && TafelOnOff == 0) {
    TVOnOff = 1;
  }

  else if (TVOnOff == 1) {
    TVOnOff = 0;
  }
}

function MarioHygieneButtonF() { // Mario schoonmaken button
    // Zorgen dat de juiste function wordt aangeroepen
  if (DoucheOnOff == 0 && BankOnOff == 0 && TafelOnOff == 0) {
    DoucheOnOff = 1; // Aanzetten dat de douche moet komen
  }

  else if (DoucheOnOff == 1) {
    DoucheOnOff = 0; // Uitzetten dat de douche moet komen
  }
}

function MarioEnergieButtonF() { // Mario relaxen button
    // Zorgen dat de juiste function wordt aangeroepen
  if (BankOnOff == 0 && DoucheOnOff == 0 && TafelOnOff == 0) {
    BankOnOff = 1; // Aanzetten dat de bank moet komen
  }

  else if (BankOnOff == 1) {
    BankOnOff = 0; // Uitzetten dat de bank moet komen
  }
}

function resetGameButton() {
  MarioX = 400; // MarioX op begin zetten
  MarioY = 510; // MarioY op begin zetten
  MarioSnelheid = 5; // MarioSnelheid op begin snelheid zetten

  for (let index = 0; index < 5; index++) {
    MarioStats[index] = 100 // Alle balken resetten naar 100
    MarioStatsKleur[index] = 'green'; // Alle circkels resetten naar groen
  }

  BankOnOff = 0; // Bank weghalen
  TVOnOff = 0; // TV weghalen
  MarioDeathSound = 0; // Death sound resetten
  AchtergrondPlaying = 0; // Open zetten dat het nog een keer afgespeelt kan worden
  AchtergrondTimer = 188; // Timer resetten voor achtergrond sound
}

// Acties statisiteken
function tafelEten() { // Tafel voor de stat eten
  if (MarioStats[0] <= 100) {
    MarioStats[0] += deltaTime * 0.021; // Zorgen dat de stats omhoog gaan
    image(Tafel, 325, 530, 350, 200); // Foto van de tafel
    MarioX = 450; // MarioX bij de tafel zetten
    MarioY = 510; // MarioY bij de tafel zetten
  }
}

function TV() { // Tv om video te kijken voor de blijheid
  MarioHongerButton.hide(); // Zorgen dat de button er niet staat
  MarioBlijButton.hide(); // Zorgen dat de button er niet staat
  MarioHygieneButton.hide(); // Zorgen dat de button er niet staat
  MarioEnergieButton.hide(); // Zorgen dat de button er niet staat

  BlijVideo.show(); // Zorgen dat je de video kan zien
  BlijVideo.play(); // Zorgen dat de video afspeelt

  TVTimer -= deltaTime * 0.001; // Zorgen voor timer dat video weggaat.

  if (TVTimer < 0) { // Zorgen dat alles reset als de timer onder de 0 is.
    TVPlaying = 0;
    TVOnOff = 0;
    BlijVideo.stop(); // Video stoppen als hij afgelopen is
    BlijVideo.hide(); // Zorgen dat de video verdwijnt
    TVTimer = 50; // Zorgen dat je video opnieuw kan starten
    AchtergrondPlaying = 0; // Open zetten dat het nog een keer afgespeelt kan worden
    AchtergrondTimer = 188; // Timer resetten

    if (MarioStats[1] <= 50) {
      MarioStats[1] = MarioStats[1] + 50; // Zorgen dat de blijheid omhoog gaat als de video is afgelopen
    }

    else if (MarioStats[1] >= 51) { // Als het 91 of hoger is / blokkeren dat hij niet verder kan
      MarioStats[1] = 100; // De bar op 100 zetten
    }
  }
}

function douche() {
  if (MarioStats[2] <= 100) {
    MarioStats[2] += deltaTime * 0.021; // Zorgen dat de stats omhoog gaan
    image(FotoDoucheWater, 596, 440, 140, 200); // foto van de douche
    MarioX = 600; // MarioX onder de douche zetten
    MarioY = 510; // MarioY onder de douche zetten zetten

    textStyle(BOLD)
    fill('red')
    textSize(20);
    text("De douche staat aan.", MarioX - 30, MarioY - 80);
  }
}

function bank() {
  if (MarioStats[3] <= 100) {
    MarioStats[3] += deltaTime * 0.021; // Zorgen dat de stats omhoog gaan
    image(FotoBank, 425, 514, 350, 200); // Foto van de bank
    MarioX = 550; // MarioX op de bank zetten
    MarioY = 440; // MarioY op de bank zetten
  }

  else if (MarioStats[3] > 100) { // Als mario volle energie heeft wordt alles weer uitgezet.
    BankOnOff = 0; // Zorgen dat de bank weer weggaat
  }
}

function mousePressed() {
  // Zorgen dat als je op bepaalde plek geklikt hebt dat de tv begint af te spelen
  if (mouseX > TVX && mouseX < TVX + TVL &&
    mouseY > TVY && mouseY < TVY + TVB && TVOnOff == 1) {
    TVPlaying = 1;
  }
}

// Data opslaan
function datastorage() {
  storeItem("MarioX", MarioX); // Opslaan X positie mario
  storeItem("MarioY", MarioY); // Opslaan Y positie mario
  storeItem("MarioSnelheid", MarioSnelheid); // Opslaan wat de snelheid van mario is

  storeItem("Statistieken", MarioStats); // Opslaan stats voor honger
  storeItem("Kleur Statistieken", MarioStatsKleur); // Opslaan kleuren statistieken
  storeItem("Datum Offline", Date.now()); // Opslaan datum voor de offline progress
}