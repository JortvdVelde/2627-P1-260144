function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);

// Variablen kleur stoplicht
  let trafficred = 'red';
  let trafficorange = 'orange';
  let trafficgreen = '#45bd18';
  
  strokeWeight(0);
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
  // Rand
  noFill()
  strokeWeight(2)
  rect(80, 240, 75, 75)

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
  strokeWeight(4);
  
  noFill();
  line(80, 400, 130, 350);
  line(130, 350, 180, 400);
  rect(80, 400, 100, 100);

// 5. Trafficlight
  fill('black');
  textSize(20);
  text('5.', 50, 540);
  strokeWeight(0);

  fill('grey');
  rect(90, 530, 70, 160);
  rect(110, 690, 30, 60);
  fill(trafficred); // Red
  circle(125, 560, 45, 45);
  fill(trafficorange); // Orange
  circle(125, 610, 45, 45);
  fill(trafficgreen); // Green
  circle(125, 660, 45, 45);

// 6. Dobbelsteen
  fill('black');
  textSize(20);
  text('6.', 350, 50);

  fill('white')
  strokeWeight(6);
  rect(380, 30, 150, 150, 10);
  fill('black');
  circle(410, 65, 30);
  circle(455, 105, 30);
  circle(500, 145, 30);

// 7. Pixelart
  textSize(20);
  text('7. Mario', 350, 220);
  strokeWeight(0);
  
  // Rij 1
  fill('#FE0100');
  rect(400, 230, 60, 10);

  // Rij 2
  fill('#FE0100');
  rect(390, 240, 100, 10);

  // Rij 3
  fill('#5F1D00');
  rect(390, 250, 30, 10);
  fill('#FFD6C0');
  rect(420, 250, 30, 10);
  fill('black');
  rect(450, 250, 10, 10);

  // Rij 4
  fill('#5F1D00');
  rect(380, 260, 10, 10);
  fill('#FFD6C0');
  rect(390, 260, 10, 10);
  fill('#5F1D00');
  rect(400, 260, 10, 10);
  fill('#FFD6C0');
  rect(410, 260, 40, 10);
  fill('black');
  rect(450, 260, 10, 10);
  fill('#FFD6C0');
  rect(460, 260, 30, 10);

  // Rij 5
  fill('#5F1D00');
  rect(380, 270, 10, 10);
  fill('#FFD6C0');
  rect(390, 270, 10, 10);
  fill('#5F1D00');
  rect(400, 270, 20, 10);
  fill('#FFD6C0');
  rect(420, 270, 40, 10);
  fill('black');
  rect(460, 270, 10, 10);
  fill('#FFD6C0');
  rect(470, 270, 30, 10);

  // Rij 6
  fill('#5F1D00');
  rect(380, 280, 20, 10);
  fill('#FFD6C0');
  rect(400, 280, 50, 10);
  fill('black');
  rect(450, 280, 40, 10);

  // Rij 7
  fill('#FFD6C0');
  rect(400, 290, 80, 10);

  // Rij 8
  fill('#FE0100');
  rect(390, 300, 20, 10);
  fill('#1A2CFF');
  rect(410, 300, 10, 10);
  fill('#FE0100');
  rect(420, 300, 40, 10);

  // Rij 9
  fill('#FE0100');
  rect(380, 310, 30, 10);
  fill('#1A2CFF');
  rect(410, 310, 10, 10);
  fill('#FE0100');
  rect(420, 310, 20, 10);
  fill('#1A2CFF');
  rect(440, 310, 10, 10);
  fill('#FE0100');
  rect(450, 310, 30, 10);

  // Rij 10
  fill('#FE0100');
  rect(370, 320, 40, 10);
  fill('#1A2CFF');
  rect(410, 320, 40, 10);
  fill('#FE0100');
  rect(450, 320, 40, 10);

  // Rij 11
  fill('#FFD6C0');
  rect(370, 330, 20, 10);
  fill('#FE0100');
  rect(390, 330, 10, 10);
  fill('#1A2CFF');
  rect(400, 330, 10, 10);
  fill('#FFF934');
  rect(410, 330, 10, 10);
  fill('#1A2CFF');
  rect(420, 330, 20, 10);
  fill('#FFF934');
  rect(440, 330, 10, 10);
  fill('#1A2CFF');
  rect(450, 330, 10, 10);
  fill('#FE0100');
  rect(460, 330, 10, 10);
  fill('#FFD6C0');
  rect(470, 330, 20, 10);

  // Rij 12
  fill('#FFD6C0');
  rect(370, 340, 30, 10);
  fill('#1A2CFF');
  rect(400, 340, 60, 10);
  fill('#FFD6C0');
  rect(460, 340, 30, 10);

  // Rij 13
  fill('#FFD6C0');
  rect(370, 350, 20, 10);
  fill('#1A2CFF');
  rect(390, 350, 80, 10);
  fill('#FFD6C0');
  rect(470, 350, 20, 10);

  // Rij 14
  fill('#1A2CFF');
  rect(390, 360, 30, 10);
  fill('#1A2CFF');
  rect(450, 360, 30, 10);

  // Rij 15
  fill('#783C00');
  rect(380, 370, 30, 10);
  fill('#783C00');
  rect(450, 370, 30, 10);

  // Rij 16
  fill('#783C00');
  rect(370, 380, 40, 10);
  fill('#783C00');
  rect(450, 380, 40, 10);

// 8. Pixelart eigen karakter
  fill('black');
  textSize(20);
  text('8. Luigi', 350, 420);
  strokeWeight(0);

  // Rij 1
  fill('#15B500');
  rect(400, 430, 60, 10);

  // Rij 2
  fill('#15B500');
  rect(390, 440, 100, 10);

  // Rij 3
  fill('#5F1D00');
  rect(390, 450, 30, 10);
  fill('#FFD6C0');
  rect(420, 450, 30, 10);
  fill('black');
  rect(450, 450, 10, 10);

  // Rij 4
  fill('#5F1D00');
  rect(380, 460, 10, 10);
  fill('#FFD6C0');
  rect(390, 460, 10, 10);
  fill('#5F1D00');
  rect(400, 460, 10, 10);
  fill('#FFD6C0');
  rect(410, 460, 40, 10);
  fill('black');
  rect(450, 460, 10, 10);
  fill('#FFD6C0');
  rect(460, 460, 30, 10);

  // Rij 5
  fill('#5F1D00');
  rect(380, 470, 10, 10);
  fill('#FFD6C0');
  rect(390, 470, 10, 10);
  fill('#5F1D00');
  rect(400, 470, 20, 10);
  fill('#FFD6C0');
  rect(420, 470, 40, 10);
  fill('black');
  rect(460, 470, 10, 10);
  fill('#FFD6C0');
  rect(470, 470, 30, 10);

  // Rij 6
  fill('#5F1D00');
  rect(380, 480, 20, 10);
  fill('#FFD6C0');
  rect(400, 480, 50, 10);
  fill('black');
  rect(450, 480, 40, 10);

  // Rij 7
  fill('#FFD6C0');
  rect(400, 490, 80, 10);

  // Rij 8
  fill('#15B500');
  rect(390, 500, 20, 10);
  fill('#1A2CFF');
  rect(410, 500, 10, 10);
  fill('#15B500');
  rect(420, 500, 40, 10);

  // Rij 9
  fill('#15B500');
  rect(380, 510, 30, 10);
  fill('#1A2CFF');
  rect(410, 510, 10, 10);
  fill('#15B500');
  rect(420, 510, 20, 10);
  fill('#1A2CFF');
  rect(440, 510, 10, 10);
  fill('#15B500');
  rect(450, 510, 30, 10);

  // Rij 10
  fill('#15B500');
  rect(370, 520, 40, 10);
  fill('#1A2CFF');
  rect(410, 520, 40, 10);
  fill('#15B500');
  rect(450, 520, 40, 10);

  // Rij 11
  fill('#FFFDFD');
  rect(370, 530, 20, 10);
  fill('#15B500');
  rect(390, 530, 10, 10);
  fill('#1A2CFF');
  rect(400, 530, 10, 10);
  fill('#FFF934');
  rect(410, 530, 10, 10);
  fill('#1A2CFF');
  rect(420, 530, 20, 10);
  fill('#FFF934');
  rect(440, 530, 10, 10);
  fill('#1A2CFF');
  rect(450, 530, 10, 10);
  fill('#15B500');
  rect(460, 530, 10, 10);
  fill('#FFFDFD');
  rect(470, 530, 20, 10);

  // Rij 12
  fill('#FFFDFD');
  rect(370, 540, 30, 10);
  fill('#1A2CFF');
  rect(400, 540, 60, 10);
  fill('#FFFDFD');
  rect(460, 540, 30, 10);

  // Rij 13
  fill('#FFFDFD');
  rect(370, 550, 20, 10);
  fill('#1A2CFF');
  rect(390, 550, 80, 10);
  fill('#FFFDFD');
  rect(470, 550, 20, 10);

  // Rij 14
  fill('#1A2CFF');
  rect(390, 560, 30, 10);
  fill('#1A2CFF');
  rect(450, 560, 30, 10);

  // Rij 15
  fill('#783C00');
  rect(380, 570, 30, 10);
  fill('#783C00');
  rect(450, 570, 30, 10);

  // Rij 16
  fill('#783C00');
  rect(370, 580, 40, 10);
  fill('#783C00');
  rect(450, 580, 40, 10);

}
