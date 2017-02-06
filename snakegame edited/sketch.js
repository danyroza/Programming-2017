//Original by Daniel Shiffman

var s;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  s.death();
  background(51);
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  noStroke();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  switch (keyCode) {
          case 87:
          case UP_ARROW:
              if (s.yspeed != 1) {
                  s.dir(0, -1);
              }
              break;
          case 83:
          case DOWN_ARROW:
              if (s.yspeed != -1) {
                  s.dir(0, 1);
              }
              break;
          case 65:
          case LEFT_ARROW:
              if (s.xspeed != 1) {
                  s.dir(-1, 0);
              }
              break;
          case 68:
          case RIGHT_ARROW:
              if (s.xspeed != -1) {
                  s.dir(1, 0);
              }
          }
      }
