// DJBokChoy instrument by Lee Tusman and Amelia Marzec and Rebecca Hui
// keys to hit: up, down, left, right, and space

// 03_Hat_Med_Cymbals_&_Snares.wav by Theriavirra | License: Attribution 3.0
// CHEAP NASTY SNARE 06.wav by sandyrb | License: Attribution 4.0
let sample = [];
let bg;
let started = false;
let startedScreen = false;
let veggie = [];
let djBokChoy = []; // object
let textile = [];
let num = 5;
let screen, whichScreen = 0, scrollDir = -1;

function preload() {
  //sfx
  //testing samples
/*  sample[0] = loadSound("assets/snd/bokchoy.mp3");
  sample[1] = loadSound("assets/snd/fishballs.mp3");
  sample[2] = loadSound("assets/snd/eggs.mp3");
  sample[3] = loadSound("assets/snd/lotus.mp3");
  sample[4] = loadSound("assets/snd/mala.mp3"); */
  sample[0] = loadSound("assets/snd/kick.wav");
  sample[1] = loadSound("assets/snd/bass.wav");
  sample[2] = loadSound("assets/snd/snare.wav");
  sample[3] = loadSound("assets/snd/cymbal.wav");
  sample[4] = loadSound("assets/snd/hihat.wav"); 
 
  //soundtrack
  bg = loadSound("assets/snd/background.mp3");
  //fruit/veggie prints
  veggie[0] = loadImage("assets/img/BOKCHOY1_72.png");
  veggie[1] = loadImage("assets/img/BOKCHOY2_72.png");
  veggie[2] = loadImage("assets/img/BOKCHOY3_72.png");
  veggie[3] = loadImage("assets/img/CILI1_72.png");
  veggie[4] = loadImage("assets/img/GOURD1_72.png");
  //background textile screens for "ken burns" pan and scan
  textile[0] = loadImage("assets/img/lankaitsui1.jpg");
  textile[1] = loadImage("assets/img/lankaitsui2.jpg");
  textile[2] = loadImage("assets/img/lankaitsui3.jpg");
  textile[3] = loadImage("assets/img/lankaitsui4.jpg");
  textile[4] = loadImage("assets/img/landehzhen.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  for (let i = 0; i < sample.length; i++) {
    sample[i].playMode("restart");
  }
  textSize(36);

  for (let i = 0; i < num; i++) {
    djBokChoy[i] = new BokJoy(i);
  }

  screen = new Textile();
  
}

//------------------------------
function draw() {
  background(50, 89, 100);

  screen.move(whichScreen);
  screen.display(whichScreen);

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
    //bg.play();
  }
}
function keyPressed() {
  if (!started) {
    started = true;
    //bg.play();
  }
  if (keyCode === LEFT_ARROW) {
    trigger(0);
  }
  if (keyCode === RIGHT_ARROW) {
    trigger(1);
  }
  if (keyCode === UP_ARROW) {
    trigger(2);
  }
  if (keyCode === DOWN_ARROW) {
    trigger(3);
  }
  if (key === " ") {
    trigger(4);
  }
}
function trigger(veg){
    whichScreen=floor(random(5))
    sample[veg].play();
    djBokChoy[veg].x = random(width);
    djBokChoy[veg].y = random(height);
    djBokChoy[veg].diameter = 500;
    djBokChoy[veg].fade2 = 255;
    if(random()<0.5){
      scrollDir = 1;
    } else {
      scrollDir = -1;
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// bokJoy class
class BokJoy {
  constructor(_img) {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 500;
    //this.speed = 1;
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
    image(veggie[this.imgnum], 0, 0, this.diameter, this.diameter);
    pop();
  }
}
class Textile{
  constructor(){
    this.x1=width/4
    this.x2=3/4*width
    this.x3=width+width/4
    this.dir=-1
  }
  display(whichScreen,scrollDir){
    image(textile[whichScreen],this.x1,height/2,width/2,height)
    image(textile[whichScreen],this.x2,height/2,width/2,height)
    image(textile[whichScreen],this.x3,height/2,width/2,height)   
  }
  move(){
    this.x1+=scrollDir
    this.x2+=scrollDir
    this.x3+=scrollDir
    if (this.x1<-width/4){
       this.x1=width+width/4
    }
    if (this.x1>width+width/4){
       this.x1=-width/4
    }
    if (this.x2<-width/4){
       this.x2=width+width/4
    }
    if (this.x2>width+width/4){
       this.x2=-width/4
    }
    if (this.x3<-width/4){
       this.x3=width+width/4
    }
    if (this.x3>width+width/4){
       this.x3=-width/4
    }
  }
}
