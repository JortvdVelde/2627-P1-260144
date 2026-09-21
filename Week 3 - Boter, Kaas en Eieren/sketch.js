let Beurt;
let BeurtKleur = ['#b5b5ae', 'blue', 'red']; // 0 (niemand), 1 (blauw), 2 (rood)
let BeurtBlauw = false;
let BeurtRood = false;

let MatchGoingOn = false; // Checkt of er een ronde bezig is

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

function setup() {
  createCanvas(450, 450);
}

function draw() {
  background('red');

  // Speelbord
  strokeWeight(0);
  fill('black'); // Kleur achtergrond
  rect(70, 65, 300, 300, 30); // Achtergrond speelbord

  // Vierkanten vakken kleuren
  // Bovenste rij
  fill('#b5b5ae');
  rect(75, 70, 90, 90, 30); // Vlak 1
  rect(175, 70, 90, 90, 30); // Vlak 2
  rect(275, 70, 90, 90, 30); // Vlak 3
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
    text('Klik een toets om te beginnen!', 85, 220);
  }

  if (MatchGoingOn == true) {
    // vlak 1 kleur geven
    if (Vlak1 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(75, 70, 90, 90, 30);
    }

    // vlak 2 kleur geven
    if (Vlak2 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(175, 70, 90, 90, 30);
    }

    // vlak 3 kleur geven
    if (Vlak3 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(275, 70, 90, 90, 30);
    }

    // vlak 4 kleur geven
    if (Vlak4 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(75, 168, 90, 90, 30);
    }

    // vlak 5 kleur geven
    if (Vlak5 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(175, 168, 90, 90, 30);
    }

    // vlak 6 kleur geven
    if (Vlak6 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(275, 168, 90, 90, 30);
    }

    // vlak 7 kleur geven
    if (Vlak7 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(75, 266, 90, 90, 30);
    }

    // vlak 8 kleur geven
    if (Vlak8 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(175, 266, 90, 90, 30);
    }

    // vlak 9 kleur geven
    if (Vlak9 == 1) {
      fill(BeurtKleur[Beurt]);
      rect(275, 266, 90, 90, 30);
    }
  }

  console.log(Beurt);
}

function keyPressed() {
  // Met een key start het spel
  if (MatchGoingOn == false) {
    MatchGoingOn = true;
    Beurt = floor(random(1, 3)); // Random kiezen wie er begint
  }
}

function mouseClicked() {
  // Met de muis start het spel
  if (MatchGoingOn == false) {
    MatchGoingOn = true;
    Beurt = floor(random(1, 3)); // Random kiezen wie er begint
  }

  // Zorgt ervoor dat de vlakken op een bepaalde manier een bepaalde kleur krijgen
  if (MatchGoingOn == true) {
    if (mouseX > 75 && mouseX < 75 + 90 &&
      mouseY > 70 && mouseY < 70 + 90) {
      Vlak1 = 1
    }

    if (mouseX > 175 && mouseX < 175 + 90 &&
      mouseY > 70 && mouseY < 70 + 90) {
      Vlak2 = 1
    }

    if (mouseX > 275 && mouseX < 275 + 90 &&
      mouseY > 70 && mouseY < 70 + 90) {
      Vlak3 = 1
    }

    if (mouseX > 75 && mouseX < 75 + 90 &&
      mouseY > 168 && mouseY < 168 + 90) {
      Vlak4 = 1
    }

    if (mouseX > 175 && mouseX < 175 + 90 &&
      mouseY > 168 && mouseY < 168 + 90) {
      Vlak5 = 1
    }

    if (mouseX > 275 && mouseX < 275 + 90 &&
      mouseY > 168 && mouseY < 168 + 90) {
      Vlak6 = 1
    }

    if (mouseX > 75 && mouseX < 75 + 90 &&
      mouseY > 266 && mouseY < 266 + 90) {
      Vlak7 = 1
    }

    if (mouseX > 175 && mouseX < 175 + 90 &&
      mouseY > 266 && mouseY < 266 + 90) {
      Vlak8 = 1
    }

    if (mouseX > 275 && mouseX < 275 + 90 &&
      mouseY > 266 && mouseY < 266 + 90) {
      Vlak9 = 1
    }
  }
}