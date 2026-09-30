function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  for (let index = 0; index < 10; index++) {

    if (index < 5) {
      rect(50, 50, 0 + index * 75, 0 + index * 75)
    }

    else if (index > 5) {
      if (index < 5) {
        rect(50, 50, 0 + index * 75, 0 - index * 75)
      }
    }
  }

}
