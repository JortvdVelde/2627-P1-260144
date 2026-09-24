let Vakkleur = []; // 0 (niemand), 1 (Player 1), 2 (Player 2)

let VakZijkant = 75; // Hoeveel de vierkanten beginnen vanaf de zijkant
let VakBovenkant = 70; // Hoeveel de vierkanten beginnen vanaf de bovenkant
let VakGrootte = 90; // Hoelang de vierkanten zijn
let VakLengte = 100; // Hoelang er tussen begin zit van iedere vierkant

let Kollomen = 3; // Aantal kolomen vierkanten
let Rij = 3; // Aantal rijen aan vierkanten

let RondeBezig = false;
let Beurt = 0; // 0 niemand, 1 Player 1, 2 Player 2

let Player1Win = false; // Check of player1 gewonnen heeft.
let Player2Win = false; // Check of player2 gewonnen heeft.
let Gelijk = false; // Check of het gelijks is geworden

let Reset = false; // Zorgen dat je het bord kan reseten

let Klik; // Variable voor klikje bij plaatsing van kleur
let Tandwiel; // Variable voor plaatje van tandwiel

let Player1Color = 'blue'; // Geeft de kleur voor Player 1 (Standaard blauw)
let Player2Color = 'red'; // Geeft de kleur voor Player 2 (Standaard rood)

let Settings = false; // Kijkt of de settings open is.

function preload() {
  Klik = loadSound('klikgeluid.wav');
  Tandwiel = loadImage('tandwiel.png');
}

function setup() {
  createCanvas(450, 450);
  reset();
}

function draw() {
  // Background kleur geven
  if (Beurt == 0) {
    background('#b5b5ae');
  }

  if (Beurt == 1) {
    background(Player1Color);
    textSize(30);
    fill('white');
    textStyle(BOLD);
    text('Player 1 is aan de beurt!', 65, 40);
  }

  if (Beurt == 2) {
    background(Player2Color);
    textSize(30);
    fill('white');
    textStyle(BOLD);
    text('Player 2 is aan de beurt!', 65, 40);
  }

  // Zorgen dat de juiste dingen gebeuren bij een win voor Player 1
  if (Player1Win == true) {
    background(Player1Color);
    textSize(30);
    fill('white');
    textStyle(BOLD);
    text('Player 1 heeft gewonnen!', 65, 40);
    RondeBezig = false;
    Reset = true;
  }

  // Zorgen dat de juiste dingen gebeuren bij een win voor Player 2
  if (Player2Win == true) {
    background(Player2Color);
    textSize(30);
    fill('white');
    textStyle(BOLD);
    text('Player 2 heeft gewonnen!', 68, 40);
    RondeBezig = false;
    Reset = true;
  }

  // Zorgen dat de juiste dingen gebeuren bij een gelijkspel
  if (Gelijk == true) {
    background('#b5b5ae');
    textSize(30);
    fill('white');
    textStyle(BOLD);
    text('Het is gelijkspel!', 105, 40);
    RondeBezig = false;
    Reset = true;
  }

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
      Player1Win = true;
    }

    else if (Vakkleur[x * Rij] == 2 && Vakkleur[x * Rij + 1] == 2 && Vakkleur[x * Rij + 2] == 2) {
      Player2Win = true;
    }
  }

  // Checken win verticale lijnen
  for (let y = 0; y < Rij; y++) {

    if (Vakkleur[y] == 1 && Vakkleur[y + 3] == 1 && Vakkleur[y + 6] == 1) {
      Player1Win = true;
    }

    else if (Vakkleur[y] == 2 && Vakkleur[y + 3] == 2 && Vakkleur[y + 6] == 2) {
      Player2Win = true;
    }
  }

  // Checken win kruisende lijnen Player 1
  if (Vakkleur[0] == 1 && Vakkleur[4] == 1 && Vakkleur[8] == 1 || Vakkleur[2] == 1 && Vakkleur[4] == 1 && Vakkleur[6] == 1) {
    Player1Win = true;
  }

  // Checken win kruisende lijnen Player 2
  else if (Vakkleur[0] == 2 && Vakkleur[4] == 2 && Vakkleur[8] == 2 || Vakkleur[2] == 2 && Vakkleur[4] == 2 && Vakkleur[6] == 2) {
    Player2Win = true;
  }

  // Checken of het gelijk is
  if (Vakkleur[0] != 0 && Vakkleur[1] != 0 && Vakkleur[2] != 0 && Vakkleur[3] != 0 && Vakkleur[4] != 0 && Vakkleur[5] != 0 && Vakkleur[6] != 0 && Vakkleur[7] != 0 && Vakkleur[8] != 0) {
    if (Player2Win == false && Player1Win == false) {
      Gelijk = true
    }
  }

  // Tekst dat je kan beginnen door op het scherm te klikken
  if (RondeBezig == false && Reset == false) {
    fill('#b7ff00')
    textSize(20);
    textStyle(BOLD);
    text('Klik op een vakje om te beginnen!', 60, 220);
  }

  // Tekst dat je kan reseten door op het scherm te klikken
  if (Reset == true) {
    fill('#b7ff00')
    textSize(20);
    textStyle(BOLD);
    text('Klik om het veld te resetten!', 90, 220);
  }

  image(Tandwiel, 390, 390, 50, 50); // Afbeelding van tandwiel
  // Settings voor de colorpicker
  if (Settings == true) {
    fill('black'); // Kleur achtergrond
    rect(70, 65, 300, 300, 30); // Achtergrond speelbord

    stroke('white');
    strokeWeight(5);
    line(45, 80, 65, 100);
    line(45, 100, 65, 80);

    fill('white')
    textSize(15);
    text('Kies hier je kleur', 100, 80)

  }
}

function reset() {
  RondeBezig = false;
  Beurt = 0; // 0 niemand, 1 Player 1, 2 Player 2

  Player1Win = false; // Check of Player 1 gewonnen heeft.
  Player2Win = false; // Check of Player 2 gewonnen heeft.
  Gelijk = false; // Check of het gelijks is geworden

  Reset = false; // Zorgen dat je het bord kan reseten
  Vakkleur = [];

  for (let x = 0; x < Kollomen; x++) {
    for (let y = 0; y < Rij; y++) {
      Vakkleur.push(0);
    }
  }
}

function mousePressed() {
  // Spel starten
  if (RondeBezig == false && Reset == false && Settings == false) {
    RondeBezig = true;
    Beurt = floor(random(1, 3)); // Random kiezen wie er begint
  }

  // Spel resetten
  if (Reset == true) {
    reset();
  }

  if (mouseX > 390 && mouseX < 390 + 50 &&
    mouseY > 390 && mouseY < 390 + 50) {
      Settings = true;
    }

  if (mouseX > 45 && mouseX < 45 + 20 &&
    mouseY > 80 && mouseY < 80 + 20 && Settings == true) {
      Settings = false;
    }

  // Zorgen dat vakjes kleur krijgt als je erop klikt
  if (RondeBezig == true && Settings == false) {
    let VakjesCounter = 0;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {

        let VakX = VakZijkant + x * VakLengte;
        let VakY = VakBovenkant + y * VakLengte;

        if (mouseX > VakX && mouseX < VakX + VakGrootte &&
          mouseY > VakY && mouseY < VakY + VakGrootte && Vakkleur[VakjesCounter] == 0) {


          if (Beurt == 1) {
            Vakkleur[VakjesCounter] = 1;
            if (Klik.isPlaying()) {
              Klik.stop();
            }
            else {
              Klik.play();
            }
          }

          if (Beurt == 2) {
            Vakkleur[VakjesCounter] = 2;
            if (Klik.isPlaying()) {
              Klik.stop();
            }
            else {
              Klik.play();
            }
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
