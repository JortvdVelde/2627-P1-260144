function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  // Body
  fill('white');
  rect(365, 175, 75, 250);

  // Head
  circle(400,100,200);

  // Eyes
  ellipse(325, 100, 30, 70);
  ellipse(475, 100, 30, 70);

  // Arms
  line(365, 250, 315, 225);
  line(440, 250, 490, 225);

  // Legs
  line(365, 425, 315, 500);
  line(440, 425, 490, 500);

  // Name
  textSize(30);
  textStyle(BOLD);
  text('Hendrik-Jan van der Meer', 225, 550);

  // Thickness of the lines
  strokeWeight(3);


}

