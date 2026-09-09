function setup() {
  createCanvas(800, 400);
}

function draw() {
  background('#9bcef5');

  // Variablen Strepen
  let sx = 0; // Startpunt streep (X-as)
  let sx2 = 50; // Streep lengte (Einde X-as)

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
  line(sx, 350, sx2, 350);

  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100; 
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);
  
  sx = sx + 100;
  sx2 = sx2 + 100;
  line(sx, 350, sx2, 350);

  // Bergen
  // Midden X-as, Midden Y-as, Rechts X-as, Rechts Y-as, Links X-as, Links Y-as 
  stroke('black');
  strokeWeight(0);
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

  // Sun
  fill(235, 150, 48, 100);
  circle(450, 65, 110);
  fill('#ffc900');
  circle(450, 65, 75);

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
  fill('#cfc4b4'); // Shadow
  circle(50, 45, 50);
  circle(80, 40, 60);
  circle(110, 45, 50);
  fill('white'); // Normal
  circle(50, 50, 50);
  circle(80, 45, 60);
  circle(110, 50, 50);
  
  fill('#cfc4b4'); // Shadow
  circle(200, 55, 50);
  circle(230, 50, 60);
  circle(260, 55, 50);
  fill('white'); // Normal
  circle(200, 60, 50);
  circle(230, 55, 60);
  circle(260, 60, 50);

  fill('#cfc4b4'); // Shadow
  circle(600, 40, 50);
  circle(630, 35, 60);
  circle(660, 40, 50);
  fill('white'); // Normal
  circle(600, 45, 50);
  circle(630, 40, 60);
  circle(660, 45, 50);

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
  rect(270, 250, 110, 75, 10);
  rect(380, 290, 20, 30);
  triangle(380, 300, 370, 270, 400, 290);
  fill('black');
  circle(290, 325, 30);
  circle(370, 325, 30);

}
