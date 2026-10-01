// https://openprocessing.org/@michelleinspace/2189726

let XposCircle = 140;
let YposCircle = 70;
let GrootteCircle = 50;

let LoopKleurCircle = 10;
let KleurCircle = []

function setup() {
  createCanvas(800, 600);

  for (let index = 0; index < LoopKleurCircle; index++) {
    KleurCircle.push([random(0, 255), random(0, 255), random(0, 255)])
  }
}

function draw() {
  background(220);
  strokeWeight(0);

  for (let index = 0; index < KleurCircle.length; index++) {
    for (let i = 0; i < KleurCircle.length; i++) {
      fill(KleurCircle[index])
      circle(XposCircle + i * GrootteCircle, YposCircle + index * GrootteCircle, GrootteCircle - 10, GrootteCircle - 10);
      circle(XposCircle + i * GrootteCircle + 5, YposCircle + index * GrootteCircle + 5, GrootteCircle - 5, GrootteCircle - 5);
      circle(XposCircle + i * GrootteCircle - 5, YposCircle + index * GrootteCircle - 5, GrootteCircle - 15, GrootteCircle - 15);
    }
  }
  
}

