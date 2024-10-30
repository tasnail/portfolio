let title, paragraph; 
let bubbleOne = []
let bubbleTwo = []
let bubbleThree = []
let bubbleOneSpeed = []
let bubbleTwoSpeed = []
let col1;
let col2;
let gDir = 0.6;
let zDir = 0.6;
let canvas;
let col3;
let col4;
let font;
let button1;
let button2;
let button3;
let button4;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
title = select("#id1");
paragraph1 = select("#id2")
paragraph2 = select("#id3")
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

for (let i = 0; i < 20; i++) {
  bubbleOne[i] = random(width);
  bubbleTwo[i] = random(height);
  bubbleThree[i] = random(20, 40);
  bubbleOneSpeed[i] = random(-0.4,0.4);
  bubbleTwoSpeed[i] = random(-0.4,0.4);
}

col1 = color("#336699")
col2 = color("#32CD32")
col3 = color(255, 215,0)
col4 = color(127,255,212)
col5 = color('#A6FBB2')

  button1 = createButton('Cyber WebCam');
  button1.position(50, 470);
  button1.style('color: DarkGreen')
  button1.style('font-family: "Pixelify Sans"')
  button1.style('background-color',col5)
  button1.style('border', '1px solid col2');
  button1.style('border-radius', '10px');
  button1.size(100,50)
  button1.mousePressed(firstPage);

  button2 = createButton('Funky Piano');
  button2.position(50, 330);
  button2.size(100,50);
  button2.style('color: DarkGreen')
  button2.style('font-family: "Pixelify Sans"')
  button2.style('background-color',col5)
  button2.style('border', '1px solid col2');
  button2.style('border-radius', '10px');
  button2.mousePressed(secondPage);

  button3 = createButton('Into the Void');
  button3.position(50, 400);
  button3.size(100,50);
  button3.style('color: DarkGreen')
  button3.style('font-family: "Pixelify Sans"')
  button3.style('background-color',col5)
  button3.style('border', '1px solid col2');
  button3.style('border-radius', '10px');
  button3.mousePressed(thirdPage);

  button4 = createButton('Who am I?');
  button4.size(100,50);
  button4.position(50, 250);
  button4.style('color: DarkGreen')
  button4.style('font-family: "Pixelify Sans"')
  button4.style('background-color',col5)
  button4.style('border', '1px solid col2');
  button4.style('border-radius', '10px');
  button4.mousePressed(fourthPage);
}
//Use window: location property: https://developer.mozilla.org/en-US/docs/Web/API/Window/location 
function firstPage() {
  window.location.href = 'page1.html';
}

function secondPage() {
  window.location.href = 'page2.html'
}

function thirdPage() {
  window.location.href = 'page3.html';
}

function fourthPage() {
  window.location.href = 'page4.html';
}

  function newGradient(x,y,w,h,col3,col4) {
    let gradient = drawingContext.createLinearGradient(x,y,w,h)
    gradient.addColorStop(0,col3)
    gradient.addColorStop(1,col4)
    drawingContext.fillStyle = gradient
    drawingContext.fillRect(x, y, w, h)

    for (let i = y; i < y + h; i++) {
          let c = lerpColor(col3, col4, map(i, h, x + y, random(0,1),random(0,1)));
          stroke(c,5);
          frameRate(100);
          line(x, i, x + w, i);
    }
  }


  let z = 0;
  let g = 0;

function draw() {

  newGradient(0,0,width, height, col3,col4);

  z = z + zDir
  g = g + gDir

  paragraph2.position(z + 200,g + 200)

  title.position(z,g);
  paragraph1.position(z + 60,g + 60);

  if (z > width/4 || z < 0) {
    zDir *= -1;
  }
  if (g > height/6 || g < 0) {
    gDir *= -1;
  }

  let speed1 = map(mouseX, 0, width, -2, 2); 
  let speed2 = map(mouseY, 0, height, -2, 2); 
  
  for (let i = 0; i < bubbleOne.length; i++) {
    bubbleOne[i] += constrain(bubbleOneSpeed[i],0,0.5);
    bubbleTwo[i] += constrain(bubbleTwoSpeed[i],0,0.5);
    
    if (bubbleOne[i] > width || bubbleOne[i] < 0) {
      bubbleOneSpeed[i] *= speed1;
    }
    if (bubbleTwo[i] > height/3 || bubbleTwo[i] < 0) {
      bubbleTwoSpeed[i] *= speed2;
    }
    
    noStroke();
    let lerpedColor = lerpColor(col3, col4,100);
    fill(lerpedColor,5)
    ellipse(bubbleOne[i], bubbleTwo[i], bubbleThree[i] * 2, bubbleThree[i] * 2);
  }
}
