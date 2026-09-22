let Beurt = 0;
let BeurtKleur = ['#b5b5ae', 'blue', 'red']; // 0 (niemand), 1 (blauw), 2 (rood)

let MatchGoingOn = false; // Checkt of er een ronde bezig is
let Reset = false;

// Vlakken kleur geven
let Vlak1 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak2 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak3 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak4 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak5 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak6 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak7 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak8 = 0; // 0 (uit), 1 (blauw), 2 (rood)
let Vlak9 = 0; // 0 (uit), 1 (blauw), 2 (rood)

// Check wie er wint
let BlauwWin = false;
let RoodWin = false;
let Gelijk = false;

function setup() {
  createCanvas(450, 450);
  Beurt = 0
}

function draw() {
  // Zorgen dat de background veranderd met de beurt
  if (Beurt == 0) {
    background('#b5b5ae');
  }

  if (Beurt == 1) { // Blauwe background
    background('blue');
  }
  if (Beurt == 2) { // Rode background
    background('red');
  }

  if (BlauwWin == true) { // Zorgen dat de background blauw wordt als blauw wint
    background('blue')
  }

  if (RoodWin == true) { // Zorgen dat de background rood wordt als rood wint.
    background('red')
  }

  // Speelbord
  strokeWeight(0);
  fill('black'); // Kleur achtergrond
  rect(70, 65, 300, 300, 30); // Achtergrond speelbord

  // Vierkanten vakken kleuren
  // Bovenste rij
  fill('#b5b5ae');
  rect(75, 70, 90, 90, 30); // Vlak 1           1 - 2 - 3
  rect(175, 70, 90, 90, 30); // Vlak 2          4 - 5 - 6
  rect(275, 70, 90, 90, 30); // Vlak 3          7 - 8 - 9
  // Middelste rij
  rect(75, 168, 90, 90, 30); // Vlak 4
  rect(175, 168, 90, 90, 30); // Vlak 5
  rect(275, 168, 90, 90, 30); // Vlak 6
  // Onderste rij
  rect(75, 266, 90, 90, 30); // Vlak 7
  rect(175, 266, 90, 90, 30); // Vlak 8
  rect(275, 266, 90, 90, 30); // Vlak 9

  // Tekst dat je kan beginnen door op het scherm te klikken
  if (MatchGoingOn == false) {
    fill('#b7ff00')
    textSize(20);
    text('Klik op een vakje om te beginnen!', 70, 220);
  }

  if (MatchGoingOn == true) {
    // vlak 1 kleur geven
    if (Vlak1 == 1) {
      fill('blue');
      rect(75, 70, 90, 90, 30);
    }

    if (Vlak1 == 2) {
      fill('red');
      rect(75, 70, 90, 90, 30);
    }

    // vlak 2 kleur geven
    if (Vlak2 == 1) {
      fill('blue');
      rect(175, 70, 90, 90, 30);
    }

    if (Vlak2 == 2) {
      fill('red');
      rect(175, 70, 90, 90, 30);
    }

    // vlak 3 kleur geven
    if (Vlak3 == 1) {
      fill('blue');
      rect(275, 70, 90, 90, 30);
    }

    if (Vlak3 == 2) {
      fill('red');
      rect(275, 70, 90, 90, 30);
    }

    // vlak 4 kleur geven
    if (Vlak4 == 1) {
      fill('blue');
      rect(75, 168, 90, 90, 30);
    }

    if (Vlak4 == 2) {
      fill('red');
      rect(75, 168, 90, 90, 30);
    }

    // vlak 5 kleur geven
    if (Vlak5 == 1) {
      fill('blue');
      rect(175, 168, 90, 90, 30);
    }

    if (Vlak5 == 2) {
      fill('red');
      rect(175, 168, 90, 90, 30);
    }

    // vlak 6 kleur geven
    if (Vlak6 == 1) {
      fill('blue');
      rect(275, 168, 90, 90, 30);
    }

    if (Vlak6 == 2) {
      fill('red');
      rect(275, 168, 90, 90, 30);
    }

    // vlak 7 kleur geven
    if (Vlak7 == 1) {
      fill('blue');
      rect(75, 266, 90, 90, 30);
    }

    if (Vlak7 == 2) {
      fill('red');
      rect(75, 266, 90, 90, 30);
    }

    // vlak 8 kleur geven
    if (Vlak8 == 1) {
      fill('blue');
      rect(175, 266, 90, 90, 30);
    }

    if (Vlak8 == 2) {
      fill('red');
      rect(175, 266, 90, 90, 30);
    }

    // vlak 9 kleur geven
    if (Vlak9 == 1) {
      fill('blue');
      rect(275, 266, 90, 90, 30);
    }

    if (Vlak9 == 2) {
      fill('red');
      rect(275, 266, 90, 90, 30);
    }
  }

  // Kijken dat als vakken een bepaalde waarde hebben dat blauw wint
  if (Vlak1 == 1 && Vlak2 == 1 && Vlak3 == 1 || Vlak4 == 1 && Vlak5 == 1 && Vlak6 == 1 || Vlak7 == 1 && Vlak8 == 1 && Vlak9 == 1 ||
    Vlak1 == 1 && Vlak4 == 1 && Vlak7 == 1 || Vlak2 == 1 && Vlak5 == 1 && Vlak8 == 1 || Vlak3 == 1 && Vlak6 == 1 && Vlak9 == 1 ||
    Vlak1 == 1 && Vlak5 == 1 && Vlak9 == 1 || Vlak3 == 1 && Vlak5 == 1 && Vlak7 == 1) {
    BlauwWin = true;
  }

  // Kijken dat als vakken een bepaalde waarde hebben dat rood wint
  else if (Vlak1 == 2 && Vlak2 == 2 && Vlak3 == 2 || Vlak4 == 2 && Vlak5 == 2 && Vlak6 == 2 || Vlak7 == 2 && Vlak8 == 2 && Vlak9 == 2 ||
    Vlak1 == 2 && Vlak4 == 2 && Vlak7 == 2 || Vlak2 == 2 && Vlak5 == 2 && Vlak8 == 2 || Vlak3 == 2 && Vlak6 == 2 && Vlak9 == 2 ||
    Vlak1 == 2 && Vlak5 == 2 && Vlak9 == 2 || Vlak3 == 2 && Vlak5 == 2 && Vlak7 == 2) {
    RoodWin = true;
  }

  // Kiezen wat de code moet doen als blauw wint
  if (BlauwWin == true) {
    fill('black');
    text('Blauw heeft gewonnen!', 120, 50);
    Beurt = 0;

    fill('#b7ff00')
    textSize(20);
    text('Klik om te herstarten!', 130, 220);
  }

  // Kiezen wat de code moet doen als rood wint
  if (RoodWin == true) {
    fill('black');
    text('Rood heeft gewonnen!', 120, 50);
    Beurt = 0;

    fill('#b7ff00')
    textSize(20);
    text('Klik om te herstarten!', 130, 220);
  }

  // Kiezen wat de code moet doen als het gelijk is.
  if (Gelijk == true) {
    fill('black');
    text('Jammer gelijk spel!', 120, 50);
    Beurt = 0;

    fill('#b7ff00')
    textSize(20);
    text('Klik om te herstarten!', 130, 220);
  }

  // Zorgen dat het speelbord wordt gereset.
  if (Reset == true) {
    Vlak1 = 0;
    Vlak2 = 0;
    Vlak3 = 0;
    Vlak4 = 0;
    Vlak5 = 0;
    Vlak6 = 0;
    Vlak7 = 0;
    Vlak8 = 0;
    Vlak9 = 0;

    BlauwWin = false;
    RoodWin = false;
    Gelijk = false;

    MatchGoingOn = false;

    Reset = false;
  }

}

function mouseClicked() {
  // Met de muis start het spel als je op een vakje klikt.
  if (mouseX > 75 && mouseX < 75 + 90 && mouseY > 70 && mouseY < 70 + 90 || // Vak 1
    mouseX > 175 && mouseX < 175 + 90 && mouseY > 70 && mouseY < 70 + 90 || // Vak 2
    mouseX > 275 && mouseX < 275 + 90 && mouseY > 70 && mouseY < 70 + 90 || // Vak 3
    mouseX > 75 && mouseX < 75 + 90 && mouseY > 168 && mouseY < 168 + 90 || // Vak 4
    mouseX > 175 && mouseX < 175 + 90 && mouseY > 168 && mouseY < 168 + 90 || // Vak 5
    mouseX > 275 && mouseX < 275 + 90 && mouseY > 168 && mouseY < 168 + 90 || // Vak 6
    mouseX > 75 && mouseX < 75 + 90 && mouseY > 266 && mouseY < 266 + 90 || // Vak 7
    mouseX > 175 && mouseX < 175 + 90 && mouseY > 266 && mouseY < 266 + 90 || // Vak 8
    mouseX > 275 && mouseX < 275 + 90 && mouseY > 266 && mouseY < 266 + 90) { // Vak 9
    if (MatchGoingOn == false) {
      MatchGoingOn = true;
      Beurt = floor(random(1, 3)); // Random kiezen wie er begint
    }
  }

  // Zorgen dat de reset werkt na een win of gelijkspel
  if (Reset == false && BlauwWin == true || RoodWin == true || Gelijk == true) {
    Reset = true;
  }

  // Zorgt ervoor dat de vlakken op een bepaalde manier een bepaalde kleur krijgen
  if (MatchGoingOn == true) {
    if (mouseX > 75 && mouseX < 75 + 90 &&
      mouseY > 70 && mouseY < 70 + 90 && Vlak1 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak1 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak1 = 2;
      }
    }

    if (mouseX > 175 && mouseX < 175 + 90 &&
      mouseY > 70 && mouseY < 70 + 90 && Vlak2 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak2 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak2 = 2;
      }
    }

    if (mouseX > 275 && mouseX < 275 + 90 &&
      mouseY > 70 && mouseY < 70 + 90 && Vlak3 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak3 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak3 = 2;
      }
    }

    if (mouseX > 75 && mouseX < 75 + 90 &&
      mouseY > 168 && mouseY < 168 + 90 && Vlak4 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak4 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak4 = 2;
      }
    }

    if (mouseX > 175 && mouseX < 175 + 90 &&
      mouseY > 168 && mouseY < 168 + 90 && Vlak5 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak5 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak5 = 2;
      }
    }

    if (mouseX > 275 && mouseX < 275 + 90 &&
      mouseY > 168 && mouseY < 168 + 90 && Vlak6 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak6 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak6 = 2;
      }
    }

    if (mouseX > 75 && mouseX < 75 + 90 &&
      mouseY > 266 && mouseY < 266 + 90 && Vlak7 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak7 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak7 = 2;
      }
    }

    if (mouseX > 175 && mouseX < 175 + 90 &&
      mouseY > 266 && mouseY < 266 + 90 && Vlak8 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak8 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak8 = 2;
      }
    }

    if (mouseX > 275 && mouseX < 275 + 90 &&
      mouseY > 266 && mouseY < 266 + 90 && Vlak9 == 0) {

      if (Beurt == 2) {
        Beurt = 1;
        Vlak9 = 1;
      }
      else if (Beurt == 1) {
        Beurt = 2;
        Vlak9 = 2;
      }
    }
  }
}