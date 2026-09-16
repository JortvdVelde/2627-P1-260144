let RandomNummer = 1;
let Timer = 0;
let TimerActive = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 
  
    console.log(Timer);
  if(TimerActive == true) {
    Timer += deltaTime * 0.001;

    if (frameCount % 5 == 0){
      RandomNummer = round(random(1, 6));
    }
    
    if (Timer >= 3) {
      TimerActive = false;
      Timer = 0;
    }
  }

  fill('white');
  rect(50, 50, 100, 100, 10);

  if(RandomNummer == 1) {
    fill('black');
    circle(100, 100, 20);
  }

  if(RandomNummer == 2) {
    fill('black');
    circle(70, 70, 20);
    circle(130, 130, 20);
  }

  if(RandomNummer == 3) {
    fill('black');
    circle(100, 100, 20);
    circle(70, 70, 20);
    circle(130, 130, 20);
  }

  if(RandomNummer == 4) {
    fill('black');
    circle(70, 70, 20);
    circle(70, 130, 20);
    circle(130, 70, 20);
    circle(130, 130, 20);
  }
  
  if(RandomNummer == 5) {
    fill('black');
    circle(70, 70, 20);
    circle(70, 130, 20);
    circle(130, 70, 20);
    circle(130, 130, 20);
    circle(100, 100, 20);
  }
  
  if(RandomNummer == 6) {
    fill('black');
    circle(70, 70, 20);
    circle(70, 100, 20);
    circle(70, 130, 20);
    circle(130, 70, 20);
    circle(130, 100, 20);
    circle(130, 130, 20);
  }
}

function keyPressed(){
  if(keyCode === 32) {
      
      TimerActive = true;
    }
}
