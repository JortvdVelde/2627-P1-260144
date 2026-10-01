let Timer = 0;

function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));

  round(Timer += deltaTime * 0.001)

  fill('black');
  textSize(50);
  text(Timer, 250, 250);
}
