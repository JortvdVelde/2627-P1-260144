function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);

  fill('black')
  // 1. Name
  textSize(20);
  text('1. Jort van der Velde', 50, 50);

  // 2. Flag
  textSize(20);
  text('2.', 50, 100);

  fill('red');
  rect(80, 75, 200, 50);
  fill('white');
  rect(80, 125, 200, 50);
  fill('blue');
  rect(80, 175, 200, 50);
  fill('black');

  // 3. Chessboard
  textSize(20);
  text('3.', 50, 260);
}
