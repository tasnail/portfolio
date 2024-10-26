let title, paragraph; 
let button1;
let button2;
let button3;
let button4;
let col1;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function preload(){
    img = loadImage("image.png");
  }

function setup() {
title = select("#id1");
paragraph1 = select("#id2")
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

col1 = color('#C6FCFF')

  button1 = createButton('Home Page');
  button1.position(40, 30);
  button1.style('color: DarkGreen')
  button1.style('font-family: "Pixelify Sans"')
  button1.style('background-color',col1)
  button1.style('border-radius', '10px');
  button1.mousePressed(homePage);

  button2 = createButton('Cyber WebCam');
  button2.position(140, 30);
  button2.style('color: DarkGreen')
  button2.style('font-family: "Pixelify Sans"')
  button2.style('background-color',col1)
  button2.style('border-radius', '10px');
  button2.mousePressed(firstPage);

  button3 = createButton('Funky Piano');
  button3.position(270, 30);
  button3.style('color: DarkGreen')
  button3.style('font-family: "Pixelify Sans"')
  button3.style('background-color',col1)
  button3.style('border-radius', '10px');
  button3.mousePressed(secondPage);

  button4 = createButton('Into the Void');
  button4.position(380,30);
  button4.style('color: DarkGreen')
  button4.style('font-family: "Pixelify Sans"')
  button4.style('background-color',col1)
  button4.style('border-radius', '10px');
  button4.mousePressed(thirdPage);
}

function homePage() {
  window.location.href = 'index.html';
}

function firstPage() {
  window.location.href = 'page1.html'
}

function secondPage() {
  window.location.href = 'page2.html'
}

function thirdPage() {
  window.location.href = 'page3.html';
}


function draw() {
    title.position(50,100)
    paragraph1.position(600,170)
    image(img, 50, 200, 500,500)
}
