// DJBokChoy instrument by Lee Tusman and Amelia Marzec and Rebecca Hui
// keys to hit: up, down, left, right, and space

let samples = [];
let bg;
let started = false;
let startedScreen = false;
let veggies = [];
let djBokChoy = []; // object
let num = 5;

function preload() {
  samples[0] = loadSound("bokchoy.mp3");
  samples[1] = loadSound("fishballs.mp3");
  samples[2] = loadSound("eggs.mp3");
  samples[3] = loadSound("lotus.mp3");
  samples[4] = loadSound("mala.mp3");
  bg = loadSound("background.mp3");
  veggies[0] = loadImage("BOKCHOY1_72.png");
  veggies[1] = loadImage("BOKCHOY2_72.png");
  veggies[2] = loadImage("BOKCHOY3_72.png");
  veggies[3] = loadImage("CILI1_72.png");
  veggies[4] = loadImage("GOURD1_72.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 0; i < samples.length; i++) {
    samples[i].playMode("restart");
  }
  textSize(36);

  for (let i = 0; i < num; i++) {
    djBokChoy[i] = new bokJoy(i);
  }
}

//------------------------------
function draw() {
  background(50, 89, 100);

  for (let i = 0; i < num; i++) {
    djBokChoy[i].display();
  }

  if (!started) {
    background(50, 89, 100);
    text("▶️", width / 2, height / 2);
  } else {
    //background(255);
  }
}
//------------------------------

function mousePressed() {
  startedScreen = true;
  if (!started) {
    started = true;
    bg.play();
  }
}
function keyPressed() {
  if (!started) {
    started = true;
    bg.play();
  }
  if (keyCode === LEFT_ARROW) {
    samples[0].play();
    djBokChoy[0].x = random(width);
    djBokChoy[0].y = random(height);
    djBokChoy[0].diameter = 500;
    djBokChoy[0].fade2 = 255;
  }
  if (keyCode === RIGHT_ARROW) {
    samples[1].play();
    djBokChoy[1].x = random(width);
    djBokChoy[1].y = random(height);
    djBokChoy[1].diameter = 500;
    djBokChoy[1].fade2 = 255;
  }
  if (keyCode === UP_ARROW) {
    samples[2].play();
    djBokChoy[2].x = random(width);
    djBokChoy[2].y = random(height);
    djBokChoy[2].diameter = 500;
    djBokChoy[2].fade2 = 255;
  }
  if (keyCode === DOWN_ARROW) {
    samples[3].play();
    djBokChoy[3].x = random(width);
    djBokChoy[3].y = random(height);
    djBokChoy[3].diameter = 500;
    djBokChoy[3].fade2 = 255;
  }
  if (key === " ") {
    samples[4].play();
    djBokChoy[4].x = random(width);
    djBokChoy[4].y = random(height);
    djBokChoy[4].diameter = 500;
    djBokChoy[4].fade2 = 255;
  }
}

// bokJoy class
class bokJoy {
  constructor(_img) {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 500;
    //this.speed = 1;
    imageMode(CENTER);
    this.fade2 = 255;
    this.imgnum = _img;
    this.rot = random(360);
  }

  display() {
    push();
    translate(this.x, this.y);
    this.rot-=0.2;
    this.fade2--;
    this.diameter--;
    rotate(this.rot);
    tint(255, this.fade2);
    image(veggies[this.imgnum], 0, 0, this.diameter, this.diameter);
    pop();
  }
}
