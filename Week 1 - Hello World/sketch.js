function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  strokeWeight(0)
// 1. Name
  fill('black')
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

// 3. Chessboard
  fill('black');
  textSize(20);
  text('3.', 50, 260);
  
  // Bovenste rij
  fill('black');
  rect(80, 240, 25, 25);
  fill('white');
  rect(105, 240, 25, 25);
  fill('black');
  rect(130, 240, 25, 25);

  // Middelste rij
  fill('white');
  rect(80, 265, 25, 25);
  fill('black');
  rect(105, 265, 25, 25);
  fill('white');
  rect(130, 265, 25, 25);

  // Onderste rij
  fill('black');
  rect(80, 290, 25, 25);
  fill('white');
  rect(105, 290, 25, 25);
  fill('black');
  rect(130, 290, 25, 25);

// 4. Transparant huisje 
  textSize(20);
  text('4.', 50, 350);
  strokeWeight(4)
  
  noFill()
  line(80, 400, 130, 350);
  line(130, 350, 180, 400);
  rect(80, 400, 100, 100);

// 5. Trafficlight
  fill('black')
  textSize(20);
  text('5.', 50, 540);
  strokeWeight(0)
}
