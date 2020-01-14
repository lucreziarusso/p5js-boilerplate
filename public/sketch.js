function setup() {
  createCanvas(windowWidth, windowHeight);
  particle = new Particle(width / 2, height / 2);
}

function draw() {
  background(0);
   textSize(16);
  fill(200);
  text("panic attack", 100, windowHeight/2);
  textAlign(CENTER);
  particle.update();
  particle.show();
}
