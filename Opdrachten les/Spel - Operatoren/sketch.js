let adoptie = 117;
let uitkomst = adoptie * adoptie + adoptie * adoptie + 9 + 9 - 2 + 8 - 556 % 3 / 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(50)
  text(uitkomst, 0, 200)
}
