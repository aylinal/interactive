let font;
let styles = [  { name: "Style 1", offset: 10 },  { name: "Style 2", offset: 20 },  { name: "Style 3", offset: 30 },  { name: "Style 4", offset: 40 }];
let styleIndex = 0;
let textTypography = "ChatBot";
let points;
let bounds;

function preload() {
  font = loadFont("fonts/Arial.ttf");
}

function setup() {
  createCanvas(800, 300);
  textFont(font);
  textSize(80);

  points = font.textToPoints(textTypography, 100, 200, 80, {
    sampleFactor: 0.25
  });

  bounds = font.textBounds(textTypography, 100, 200, 80);
}

function draw() {
  background(255);

  fill(0);
  text(styles[styleIndex].name, width / 2, 50);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let offset =
      sin(frameCount * 0.01 + p.x * 0.1 + p.y * 0.1) *
      styles[styleIndex].offset;
    let x = p.x + offset;
    let y = p.y + offset;
    stroke(0);
    strokeWeight(2);
    point(x, y);
  }

  fill(255, 0, 0);
  noStroke();
  text(textTypography, 100, 200);
}

function mousePressed() {
  styleIndex = (styleIndex + 1) % styles.length;
}
