let score = 61;

function setup() {
  createCanvas(400, 200);
  score = ceil(random(0,100));
}

function draw() {
  background(220);

  textSize(10);
  fill('black');
  text('Score: ' + score, 10, 20);

  textSize(30)
  if (score <= 49) {
    fill('red');
    text('Onvoldoende...', 100, 100);
  }
  
  else if (score >= 50 && score <= 69) {
    fill('orange');
    text('Voldoende', 120, 100);
  }
  
  else if (score >= 70 && score <= 89) {
    fill('yellow');
    text('Goed gedaan!', 100, 100);
  }
  
  else if (score >= 90) {
    fill('green');
    text('Uitstekend!', 115, 100);
  }
}

