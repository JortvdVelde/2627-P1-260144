function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

// Sidelines
  line(0, 0, 600, 0);
  line(600, 0, 600, 400);
  line(0, 400, 600, 400);
  line(0, 0, 0, 400);

// Horizontal lines
  line(0, 100, 600, 100);
  line(0, 50, 100, 50)
  line(150, 50, 500, 50)
  line(0, 200, 600, 200);
  line(0, 300, 600, 300);
  line(150, 75, 250, 75);
  line(0, 250, 300, 250);
  line(0, 350, 300, 350);

// Vertical lines
  line(100, 0, 100, 400);
  line(250, 0, 250, 400);
  line(150, 0, 150, 400);
  line(300, 0, 300, 400);
  line(400, 0, 400, 400);
  line(500, 0, 500, 400);
  line(450, 100, 450, 400);

// thickness of the lines
  strokeWeight(4);
  
// Squares with different colors
// 0 - 100 (Y-as)
  fill('yellow');
  rect(0, 0, 100, 50);
    
  fill('black');
  rect(100, 0, 50, 100);
    
  fill('red');
  rect(150, 50, 100, 25);
    
  fill('blue');
  rect(250, 50, 50, 50);
    
  fill('yellow');
  rect(300, 0, 100, 50);
    
  fill('blue');
  rect(500, 0, 100, 100);

// 100 - 200 (Y-as)
  fill('red');
  rect(0, 100, 100, 100);

  fill('yellow');
  rect(150, 100, 100, 100);

  fill('black')
  rect(250, 100, 150, 100);

  fill('blue')
  rect(450, 100, 50, 100);

  ('black');
  rect(100, 200, 50, 50);

// 200 - 300 (Y-as)
  fill('blue');
  rect(0, 250, 100, 50);

  fill('red');
  rect(150, 250, 100, 50);

  fill('yellow')
  rect(300, 200, 100, 100);

  fill('black')
  rect(450, 200, 50, 100);

// 300 - 400 (Y-as)
  fill('yellow')
  rect(0, 300, 100, 50);

  fill('black')
  rect(100, 350, 50, 50);

  fill('blue');
  rect(150, 300, 100, 50);

  fill('black');
  rect(250, 300, 50, 50);

  fill('red');
  rect(300, 300, 100, 100);

  fill('blue');
  rect(400, 300, 50, 100);

  fill('yellow');
  rect(500, 300, 100, 100);

}