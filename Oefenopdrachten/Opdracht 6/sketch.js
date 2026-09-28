let Color = ['red', 'green', 'blue', 'purple', 'yellow'];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Cijfers laten komen op scherm.
  text('1.', 20, 15);
  text('2.', 20, 100);
  text('3.', 20, 190);
  text('4.', 20, 250);
  text('5.', 120, 15);
  text('6.', 120, 100);
  text('7.', 120, 190);
  text('8.', 120, 280);
  text('9.', 240, 15);

  // Tekenen array
  for (let index = 0; index < 4; index++) {
    fill(Color[index * 1])
    text
    
  }

}
