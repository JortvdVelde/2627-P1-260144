// Variablen zon
  let sun = 200;
  let sunspeed = 1;

// Variablen Clouds
  let cloudslinks = 60;
  let cloudsmidden = 300;
  let cloudsrechts = 600;
  let cloudssnel = 500;
  let cloudsspeed = -1;
  let cloudsspeedsnel = -1.5;

// Variablen car
  let car1v = 270;
  let car1b = 380;
  let carspeed = 2;

  let car2v;
  let car2b;
  let carspeed2 = 3

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background('#9bcef5');
  // Variablen Strepen
  let LineStartXas = 0; // Startpunt streep (X-as)
  let LineEndXas = 50; // Streep lengte (Einde X-as)

  // Variablen bergen
  let mx = 100; // Bovenzijde X-as
  let rx = 250; // Rechterkant X-as
  let lx = -50; // Linkerkant X-as

  
  // Road
  fill('grey');
  rect(0, 300, 800, 100);

  // Roadmarking
  strokeWeight(8);
  stroke('lightgrey');
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);
  
  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  LineStartXas = LineStartXas + 100;
  LineEndXas = LineEndXas + 100;
  line(LineStartXas, 350, LineEndXas, 350);

  // Sun
  stroke('black');
  strokeWeight(0);
  fill(235, 150, 48, 100);
  circle(sun, 65, 110);
  fill('#ffc900');
  circle(sun, 65, 75);
  
  sun = sun + sunspeed;
  if(sun >= 855) {
    sun = -55;
  }

  // Bergen
  // Midden X-as, Midden Y-as, Rechts X-as, Rechts Y-as, Links X-as, Links Y-as 
  fill('#636e6c');
  triangle(mx, 125, rx, 285, lx, 285);

  mx = mx + 200;
  rx = rx + 200;
  lx = lx + 200;
  fill('#8d9e9b');
  triangle(mx, 50, rx, 285, lx, 285);

  mx = mx + 225;
  rx = rx + 225;
  lx = lx + 250;
  fill('#818786');
  triangle(mx, 145, rx, 285, lx, 285);

  mx = mx + 175;
  rx = rx + 175;
  lx = lx + 150;
  fill('#5d6664')
  triangle(mx, 115, rx, 285, lx, 285);

  // Grass
  fill('green');
  rect(0, 290, 800, 10);
  fill('darkgreen');
  rect(0, 284, 800, 6);

  // Trees
  fill('#87622e');
  rect(53, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(62, 189, 60);
  circle(85, 209, 60);
  circle(40, 209, 60);
  fill('green') // Normal
  circle(62, 184, 60);
  circle(85, 204, 60);
  circle(40, 204, 60);

  fill('#87622e');
  rect(193, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(202, 189, 60);
  circle(225, 209, 60);
  circle(180, 209, 60);
  fill('green') // Normal
  circle(202, 184, 60);
  circle(225, 204, 60);
  circle(180, 204, 60);

  fill('#87622e');
  rect(443, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(452, 189, 60);
  circle(475, 209, 60);
  circle(430, 209, 60);
  fill('green') // Normal
  circle(452, 184, 60);
  circle(475, 204, 60);
  circle(430, 204, 60);

  fill('#87622e');
  rect(543, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(552, 189, 60);
  circle(575, 209, 60);
  circle(530, 209, 60);
  fill('green') // Normal
  circle(552, 184, 60);
  circle(575, 204, 60);
  circle(530, 204, 60);

  fill('#87622e');
  rect(693, 194, 20, 90);
  fill('#2b632e'); // Shadow
  circle(702, 189, 60);
  circle(725, 209, 60);
  circle(680, 209, 60);
  fill('green') // Normal
  circle(702, 184, 60);
  circle(725, 204, 60);
  circle(680, 204, 60);

// Clouds
  // Cloudslinks
  fill('#cfc4b4'); // Shadow
  circle(cloudslinks, 45, 50);
  circle(cloudslinks + 30, 40, 60);
  circle(cloudslinks + 60, 45, 50);
  fill('white'); // Normal
  circle(cloudslinks, 50, 50);
  circle(cloudslinks + 30, 45, 60);
  circle(cloudslinks + 60, 50, 50);

  cloudslinks = cloudslinks + cloudsspeed;
  if(cloudslinks <= -100) {
    cloudslinks = 900;
  }

  // Cloudsmidden
  fill('#cfc4b4'); // Shadow
  circle(cloudsmidden, 55, 50);
  circle(cloudsmidden + 30, 50, 60);
  circle(cloudsmidden + 60, 55, 50);
  fill('white'); // Normal
  circle(cloudsmidden, 60, 50);
  circle(cloudsmidden + 30, 55, 60);
  circle(cloudsmidden + 60, 60, 50);

  cloudsmidden = cloudsmidden + cloudsspeed;
  if(cloudsmidden <= -100) {
    cloudsmidden = 900;
  }

  // Cloudsrechts
  fill('#cfc4b4'); // Shadow
  circle(cloudsrechts, 40, 50);
  circle(cloudsrechts + 30, 35, 60);
  circle(cloudsrechts + 60, 40, 50);
  fill('white'); // Normal
  circle(cloudsrechts, 45, 50);
  circle(cloudsrechts + 30, 40, 60);
  circle(cloudsrechts + 60, 45, 50);

  cloudsrechts = cloudsrechts + cloudsspeed;
  if(cloudsrechts <= -100) {
    cloudsrechts = 900;
  }

  // Clouds snel
  fill('#cfc4b4'); // Shadow
  circle(cloudssnel, 40, 50);
  circle(cloudssnel + 30, 35, 60);
  circle(cloudssnel + 60, 40, 50);
  fill('white'); // Normal
  circle(cloudssnel, 45, 50);
  circle(cloudssnel + 30, 40, 60);
  circle(cloudssnel + 60, 45, 50);

  cloudssnel = cloudssnel + cloudsspeedsnel;
  if(cloudssnel <= -100) {
    cloudssnel = 900;
  }

  // Traffic light
  fill('#575552');
  rect(600, 200, 32, 70);
  rect(611, 270, 10, 30);
  fill('red');
  circle(616, 213, 16);
  fill('orange');
  circle(616, 235, 16);
  fill('green');
  circle(616, 256, 16);

  // Car
  fill('lightblue');
  rect(car1v, 250, 110, 75, 10);
  rect(car1b, 290, 20, 30);
  fill('black');
  circle(car1v + 20, 325, 30);
  circle(car1b - 10, 325, 30);

  car1v = car1v + carspeed;
  car1b = car1b + carspeed;
  if(car1v >= 900) {
    car1v = -150
    car1b = -40
  }
  /*
  fill('lightblue');
  rect(car2v, 250, 110, 75, 10);
  rect(car2b, 290, 20, 30);
  fill('black');
  circle(car2v + 20, 325, 30);
  circle(car2b - 10, 325, 30);

  car2v = car2v + carspeed2;
  car2b = car2b + carspeed2;
  if(car2v >= 900) {
    car2v = -150
    car2b = -40
  }
*/
}
