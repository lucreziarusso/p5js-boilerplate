class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }

  update() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    let v = createVector(this.x, this.y);
    this.history.push(v);


    if (this.history.length > 40) {
      this.history.splice(0, 1);
    }
  }

  show() {
    noStroke();
    fill(0, 150);
    ellipse(this.x, this.y, 20, 20);

    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      fill(255, 255, 255, 50);
      ellipse(pos.x, pos.y, i, i);
    }
  }
}
