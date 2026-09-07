function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

// Horizontal lines
// line(lengte horizontaal, lengte verticaal, hoogte horizontaal, hoogte verticaal)
  line(0, 100, 600, 100);
  line(0, 50, 100, 50)
  line(150, 50, 500, 50)
  line(0, 200, 600, 200);
  line(0, 300, 600, 300);
  line(150, 75, 250, 75);

// Vertical lines
  line(100, 0, 100, 400);
  line(250, 0, 250, 400);
  line(150, 0, 150, 400);
  line(300, 0, 300, 400);
  line(400, 0, 400, 400);
  line(500, 0, 500, 400);

// Dikte
  strokeWeight(4);
  
// Vierkanten met kleur
  rect(0, 0, 100, 50);
    fill(255, 255, 0);

  rect(100, 0, 50, 100);
    fill(0, 0, 0);

  rect(150, 50, 100, 25);
    fill(0, 0, 255);
}