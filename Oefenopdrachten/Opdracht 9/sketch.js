let cirkels = [];
let punten = 0;

function setup() {
  createCanvas(800, 600);

  for (let index = 0; index < 500; index++) {
    let C = {
      xPositie: random(50, 800),
      yPositie: random(50, 600),
      radius: random(10, 50),
      kleur: random(['red', 'grey', 'blue', 'green', 'yellow']),
      snelheidX: random(-5, 5),
      snelheidY: random(-5, 5)
    }

    cirkels.push(C);
  }
}

function draw() {
  background(220);

  for (let index = 0; index < cirkels.length; index++) {
    let cirkel = cirkels[index];

    fill(cirkel.kleur);
    circle(cirkel.xPositie, cirkel.yPositie, cirkel.radius);
    cirkel.xPositie = cirkel.xPositie + cirkel.snelheidX;
    cirkel.yPositie = cirkel.yPositie + cirkel.snelheidY;

    if (cirkel.xPositie < 0) {
      cirkel.snelheidX *= -1
    }

    if (cirkel.yPositie < 0) {
      cirkel.snelheidY *= -1
    }

    if (cirkel.xPositie > width) {
      cirkel.snelheidX *= -1
    }

    if (cirkel.yPositie > height) {
      cirkel.snelheidY *= -1
    }
  }
  console.log(punten)
}

function mousePressed() {
  for (let index = 0; index < cirkels.length; index++) {
    let cirkel = cirkels[index]
    let distance = dist (mouseX, mouseY, cirkel.xPositie, cirkel.yPositie);
  
    if (distance <= cirkel.radius) {
      punten += 1;
    }
  }
}