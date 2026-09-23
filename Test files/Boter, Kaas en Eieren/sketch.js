let Vakkleur = []; // 0 (niemand), 1 (blauw), 2 (rood)

let VakZijkant = 75; // Hoeveel de vierkanten beginnen vanaf de zijkant
let VakBovenkant = 70; // Hoeveel de vierkanten beginnen vanaf de bovenkant
let VakGrootte = 90; // Hoelang de vierkanten zijn
let VakLengte = 100; // Hoelang er tussen begin zit van iedere vierkant

let Kollomen = 3; // Aantal kolomen vierkanten
let Rij = 3; // Aantal rijen aan vierkanten

let RondeBezig = false;
let Beurt = 0; // 0 niemand, 1 blauw, 2 rood

let BlauwWin = false; // Check of blauw gewonnen heeft.
let RoodWin = false; // Check of rood gewonnen heeft.
let Gelijk = false; // Check of het gelijks is geworden

let Reset = false;

function setup() {
  createCanvas(450, 450);
  for (let x = 0; x < Kollomen; x++) {
    for (let y = 0; y < Rij; y++) {
      Vakkleur.push(0);
    }
  }
}

function draw() {
  // Background kleur geven
  if (Beurt == 0) {
    background('#b5b5ae');
  }

  if (Beurt == 1) {
    background('blue');
  }

  if (Beurt == 2) {
    background('red');
  }

  // Zorgen dat de juiste dingen gebeuren bij een win voor blauw
  if (BlauwWin == true) {
    background('blue');
    textSize(30);
    fill('white');
    text('Blauw heeft gewonnen!', 65, 40);
    RondeBezig = false;
    Reset = true;
  }

  // Zorgen dat de juiste dingen gebeuren bij een win voor rood
  if (RoodWin == true) {
    background('red');
    textSize(30);
    fill('white');
    text('Rood heeft gewonnen!', 68, 40);
    RondeBezig = false;
    Reset = true;
  }

  // Zorgen dat de juiste dingen gebeuren bij een gelijkspel
  if (Gelijk == true) {
    background('#b5b5ae');
    textSize(30);
    fill('white');
    text('Het is gelijkspel!', 105, 40);
    RondeBezig = false;
    Reset = true;
  }

  textSize(15);
  fill('black');
  text(Vakkleur, 25, 25);

  // Speelbord
  strokeWeight(0);
  fill('black'); // Kleur achtergrond
  rect(70, 65, 300, 300, 30); // Achtergrond speelbord

  // Zorgen dat de vakken worden getekend en dat de kleur wordt gegeven.
  Vakkleur[0]
  Vakkleur[1]
  Vakkleur[2]

  let VakjesCounter = 0;
  // Vakjes kleur geven en zorgen dat er vakjes komt
  for (let x = 0; x < Kollomen; x++) {
    for (let y = 0; y < Rij; y++) {

      let VakX = VakZijkant + x * VakLengte;
      let VakY = VakBovenkant + y * VakLengte

      if (Vakkleur[VakjesCounter] == 0) {
        fill('#b5b5ae');
      }

      else if (Vakkleur[VakjesCounter] == 1) {
        fill('blue');
      }

      else if (Vakkleur[VakjesCounter] == 2) {
        fill('red');
      }

      rect(VakX, VakY, VakGrootte, VakGrootte, 30)
      VakjesCounter++;
    }
  }

  // Checken win horizontale lijnen
  for (let x = 0; x < Kollomen; x++) {

    if (Vakkleur[x * Rij] == 1 && Vakkleur[x * Rij + 1] == 1 && Vakkleur[x * Rij + 2] == 1) {
      BlauwWin = true;
    }

    else if (Vakkleur[x * Rij] == 2 && Vakkleur[x * Rij + 1] == 2 && Vakkleur[x * Rij + 2] == 2) {
      RoodWin = true;
    }
  }

  // Checken win verticale lijnen
  for (let y = 0; y < Rij; y++) {

    if (Vakkleur[y] == 1 && Vakkleur[y + 3] == 1 && Vakkleur[y + 6] == 1) {
      BlauwWin = true;
    }

    else if (Vakkleur[y] == 2 && Vakkleur[y + 3] == 2 && Vakkleur[y + 6] == 2) {
      RoodWin = true;
    }
  }

  // Checken win kruisende lijnen blauw
  if (Vakkleur[0] == 1 && Vakkleur[4] == 1 && Vakkleur[8] == 1 || Vakkleur[2] == 1 && Vakkleur[4] == 1 && Vakkleur[6] == 1) {
    BlauwWin = true;
  }

  // Checken win kruisende lijnen rood
  else if (Vakkleur[0] == 2 && Vakkleur[4] == 2 && Vakkleur[8] == 2 || Vakkleur[2] == 2 && Vakkleur[4] == 2 && Vakkleur[6] == 2) {
    RoodWin = true;
  }

  // Tekst dat je kan beginnen door op het scherm te klikken
  if (RondeBezig == false && Reset == false) {
    fill('#b7ff00')
    textSize(20);
    text('Klik op een vakje om te beginnen!', 70, 220);
  }

  // Tekst dat je kan reseten door op het scherm te klikken
  if (Reset == true) {
    fill('#b7ff00')
    textSize(20);
    text('Klik om het veld te resetten!', 95, 220);

    
  }
}

function mousePressed() {
  // Spel starten
  if (RondeBezig == false && Reset == false) {
    RondeBezig = true;
    Beurt = floor(random(1, 3)); // Random kiezen wie er begint
  }

  // Spel resetten
  if (Reset == true) {
    Reset = false;
    Vakkleur[VakjesCounter] = 0
    VakjesCounter++;
  }

  // Zorgen dat vakjes kleur krijgt als je erop klikt
  if (RondeBezig == true) {
    let VakjesCounter = 0;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {

        let VakX = VakZijkant + x * VakLengte;
        let VakY = VakBovenkant + y * VakLengte;

        if (mouseX > VakX && mouseX < VakX + VakGrootte &&
          mouseY > VakY && mouseY < VakY + VakGrootte && Vakkleur[VakjesCounter] == 0) {

          if (Beurt == 1) {
            Vakkleur[VakjesCounter] = 1;
          }

          if (Beurt == 2) {
            Vakkleur[VakjesCounter] = 2;
          }

          Beurt += 1
          if (Beurt > 2) {
            Beurt = 1;
          }
        }
        VakjesCounter++
      }
    }
  }
}
