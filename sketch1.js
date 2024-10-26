let song; 
let asciiLetter = "*@!*@&SHAK#*&*!**@HGDUSNVT*%#@*FAHJA"
let vidwd = 160
let vidht = 90
let sc = 20;
let wd, ht;
let button1;
let button2;
let button3;
let button4;
let col1;

let vid;

function preload(){
  song = loadSound("MusicIsMath.mp3");
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(vidwd * sc, vidht * sc);
  
  vid = createCapture(VIDEO, { flipped: false })
  vid.size(vidwd,vidht);
  wd = width/vid.width;
  ht = height/vid.height;
  vid.hide();  
  colorMode(HSB)

  col1 = color('#C6FCFF')

  button1 = createButton('Home Page');
  button1.position(40, 30);
  button1.mousePressed(homePage);
  button1.style('color', 'DarkGreen')
  button1.style('font-family: "Tahoma"')
  button1.style('background-color',col1)
  button1.style('border-radius', '10px');
  button1.mousePressed(homePage);
  reverb = new p5.Reverb();

  button2 = createButton('Funky Piano');
  button2.position(140, 30);
  button2.style('color: DarkGreen')
  button2.style('font-family: "Tahoma"')
  button2.style('background-color',col1)
  button2.style('border-radius', '10px');
  button2.mousePressed(secondPage);

  button3 = createButton('Into the Void');
  button3.position(240,30);
  button3.style('color: DarkGreen')
  button3.style('font-family: "Tahoma"')
  button3.style('background-color',col1)
  button3.style('border-radius', '10px');
  button3.mousePressed(thirdPage);

  button4 = createButton('Who am I?');
  button4.position(340,30);
  button4.style('color: DarkGreen')
  button4.style('font-family: "Tahoma"')
  button4.style('background-color',col1)
  button4.style('border-radius', '10px');
  button4.mousePressed(fourthPage);

  song.setVolume(10);
  
  song.disconnect();  
  
  reverb.process(song, 10, 8);  

  song.play();

  song.rate(0.8);
}

function homePage() {
  window.location.href = 'index.html';
}
function secondPage() {
  window.location.href = 'page2.html';
}

function thirdPage() {
  window.location.href = 'page3.html';
}

function fourthPage() {
  window.location.href = 'page4.html';
}

function draw() {
  vid.loadPixels();  
  background(0);

  if (frameCount % 30 == 0) {
    let randomSpd = random(0.5, 1.5);
    song.rate(randomSpd);
    
    let randPan = random(-0.5, 3);
    song.pan(randPan);
    //this changes the speed of the music between both earphones
  }
  
  for (let i=0; i<vid.width; i++) {
    for (let y=0; y<vid.height; y++) {
      let pixelIndex = (i + y*vid.width) * 4;
      let r = vid.pixels[pixelIndex + 0];
      let g = vid.pixels[pixelIndex + 1];
      let b = vid.pixels[pixelIndex + 2];
      let mean = (r + g + b)/3
      let l = asciiLetter.length;
      asciiIndex = floor(map(mean, 0, 255, l - 1, 0));

      let x = i*wd + wd/2;
      let z = y*ht + ht/2;
      let asciiChar = asciiLetter.charAt(asciiIndex);

      fill('#00FFFF')
      textAlign(LEFT, TOP);
      text(asciiChar, x, z);
    }
}
}