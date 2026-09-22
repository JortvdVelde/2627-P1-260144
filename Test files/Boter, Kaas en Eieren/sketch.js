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


function setup() {
  createCanvas(450, 450);
  for (let x = 0; x < Kollomen; x++) {
    for (let y = 0; y < Rij; y++) {
      Vakkleur.push(0);
    }
  }
}

function draw() {
  background('#b5b5ae');
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
  console.log(Beurt);

  // Tekst dat je kan beginnen door op het scherm te klikken
  if (RondeBezig == false) {
    fill('#b7ff00')
    textSize(20);
    text('Klik op een vakje om te beginnen!', 70, 220);
  }
}

function mousePressed() {

  if (RondeBezig == false) {
    RondeBezig = true;
    Beurt = floor(random(1, 3)); // Random kiezen wie er begint
  }

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
