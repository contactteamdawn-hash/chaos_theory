let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = [];

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('canvas-container');
  colorMode(HSB);
}

function draw() {
  background(0);

  let dt = 0.01;
  let dx = (a * (y - x)) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(new p5.Vector(x, y, z));

  translate(0, 0, -80);
  scale(5);
  stroke(255);
  noFill();

  let hu = 0;
  beginShape();

  for (let i = 0; i < points.length; i++) {
    let v = points[i];
    stroke(hu, 255, 255);
    vertex(v.x, v.y, v.z);
    hu += 0.1;
    if (hu > 255) {
      hu = 0;
    }
  }
  endShape();
}
