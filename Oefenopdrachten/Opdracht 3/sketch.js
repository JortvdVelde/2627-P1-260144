function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

    // Stoplicht
  fill('grey');
  rect(600, 100, 100, 250);
  rect(625, 350, 50, 75);

  fill('red');
  circle(650, 150, 50);
  fill('yellow');
  circle(650, 220, 50);
  fill('green');
  circle(650, 290, 50);
  noFill();

}
