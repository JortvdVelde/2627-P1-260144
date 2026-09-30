function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(220);

  fill('black');
  text('1.', 20, 15);
  text('2.', 20, 105);
  text('3.', 80, 105);
  text('4.', 80, 205);
  text('5.', 540, 20);
  text('6.', 350, 105);
  text('7.', 625, 105);

  // Zorgen dat de 10 blokjes worden getekend en dat blokje 7 ingekleurd word.
  for (let index = 0; index < 10; index++) {
    if (index == 6) {
      fill('blue');
    }
    else {
      fill('white');
    }

    rect(20 + index * 50, 20, 50, 50)
  }

  // Zorgen dat er 5 blokjes worden getekend en dat het van kleur veranderd.
  for (let index = 0; index < 5; index++) {
    fill(index * 60);
    rect(20, 115 + index * 50, 50, 50);
  }

  // Zorgen dat er rechthoeken getekend worden en dat deze steeds groener worden. 
  let xOffSet = 0;
  for (let index = 0; index < 4; index++) {
    fill(0, index * 60, 0);
    rect(80 + xOffSet, 120, 20 * index + 20, 30);
    xOffSet = xOffSet + 20 * (index + 1);
  }

  // Zorgen dat de rechthoeken getekend worden en dat deze steeds groter worden
  xOffSet = 0;
  for (let index = 0; index < 4; index++) {
    fill(0, 0, 255 - index * 90);
    rect(80 + xOffSet, 210, 20 * index + 20, 20 * index + 30);
    xOffSet = xOffSet + 20 * (index + 1);
  }

  // Zorgen dat er 6 circkels komen met grotere strokeweight.
  fill('white');
  for (let index = 0; index < 6; index++) {
    strokeWeight(1 + index * 2);
    circle(550 + index * 43, 50, 30)
  }
  strokeWeight(1);

  // Zorgen dat er een bullseye gemaakt wordt 
  fill('red');
  for (let index = 0; index < 10; index++) {

    circle(480, 225, 250 - index * 25)

    if (index % 2 !== 0) {
      fill('red');
    }

    else {
      fill('white');
    }
  }

  // Acordeon maken
  fill(140, 140, 140);
  for (let index = 0; index < 21; index++) {  
    if (index < 11) {
      rect(630, 110 + index * 10, 30 + index * 10, 10);
    }

    if (index >= 11) {
      rect(630, 110 + index * 10, 230 - index * 10, 10);
    }

    if (index % 2 !== 0) {
      fill(140, 140, 140);
    }

    else {
      fill(255, 255, 255);
    }
  }
}
