var stars = [];
var speed;

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (var i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0, 60);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}