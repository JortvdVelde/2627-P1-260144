let ActieveVraag = 2; // Welke vraag er wordt laten zien; 0 = beginscherm; 26 = eindscherm
let Kamerplant;
let KamerplantJungle;
let KamerplantDick;

function preload() {
  Kamerplant = loadImage('kamerplant.png'); // inladen foto van kamerplant
  KamerplantJungle = loadImage('Kamerplant-jungle.png'); // inladen foto jungle
  KamerplantDick = loadImage('kamerplant-dick.png'); // inladen foto dickschoof
}

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  if (ActieveVraag == 0) {
    beginscherm()
  }

  if (ActieveVraag == 1) {
    Vraag1()
  }

  console.log(ActieveVraag);
}

function beginscherm() {
  rect(40, 40, 910, 270, 30); // Balk voor bericht
  textStyle(BOLD);
  textSize(70);
  text('Welkom bij de quiz!', 160, 130);
  textSize(50);
  text('Klik op het scherm om te beginnen.', 90, 230);
}



function meerkeuze() {
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  rect(30, 550, 460, 100, 30); // Linksboven
  rect(30, 670, 460, 100, 30); // Linksonder
  rect(510, 550, 460, 100, 30); // Rechtsboven
  rect(510, 670, 460, 100, 30); // Rechtsonder
}

function trueorfalse() {
  rect(40, 40, 910, 150, 30); // Balk voor de vraag
  textStyle(BOLD)
  textSize(80)
  rect(30, 550, 460, 200, 30); // Links
  text('Waar', 150, 670); // tekst waar
  rect(510, 550, 460, 200, 30); // Rechts
  text('Niet waar', 570, 670); // tekst niet waar
}

function fotoVraag() {
  textSize(25);
  // Vlakken voor foto's
  rect(30, 200, 300, 300); // plek foto links  
  text('Afbeelding 1', 100, 530); // tekst afbeelding 1
  rect(350, 200, 300, 300); // plek foto midden
  text('Afbeelding 2', 425, 530); // tekst afbeelding 2
  rect(670, 200, 300, 300); // plek foto rechts
  text('Afbeelding 3', 750, 530); // tekst afbeelding 3

  // Antwoord mogelijkheden
  textSize(40);
  text('Afbeelding 1', 135, 610);
  text('Afbeelding 2', 135, 730);
  text('Afbeelding 3', 630, 610);
  text('Geen van alle', 620, 730);
}

function Vraag1() {
  meerkeuze()
  fotoVraag()

  image(KamerplantJungle, 30, 200, 300, 300); // foto jungle links
  image(Kamerplant, 350, 200, 300, 300); // foto kamerplant midden
  image(KamerplantDick, 670, 200, 300, 300); // foto dick schoof rechts

  // Vraag
  textSize(40);
  textStyle(BOLD);
  text('Welke van de drie is een kamerplant?', 140, 130);
}

function Vraag2() {

}

function Vraag3() {

}

function Vraag4() {

}

function Vraag5() {

}

function Vraag6() {

}

function Vraag7() {

}

function Vraag8() {

}

function Vraag9() {

}

function Vraag10() {

}

function Vraag11() {

}

function Vraag12() {

}

function Vraag13() {

}

function Vraag14() {

}

function Vraag15() {

}

function Vraag16() {

}

function Vraag17() {

}

function Vraag18() {

}

function Vraag19() {

}

function Vraag20() {

}

function Vraag21() {

}

function Vraag22() {

}

function Vraag23() {

}

function Vraag24() {

}

function Vraag25() {

}


function mousePressed() {
  if (ActieveVraag == 0) {
    if (mouseX > 0 && mouseX < 0 + 1000 &&
      mouseY > 0 && mouseY < 0 + 800) {
      ActieveVraag = ceil(random(0, 25));
    }
  }
}
