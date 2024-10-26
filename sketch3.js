let COUNTER = 10
let button1;
let button2;
let button3;
let button4;
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  frameCount = 12
  angleMode(RADIANS)

  col1 = color('#808080')

  button1 = createButton('Home Page');
  button1.position(40, 30);
  button1.style('color: black')
  button1.style('font-family: "Pixelify Sans"')
  button1.style('background-color',col1)
  button1.style('border-radius', '10px');
  button1.mousePressed(homePage);

  button2 = createButton('Cyber WebCam');
  button2.position(140, 30);
  button2.style('color: black')
  button2.style('font-family: "Pixelify Sans"')
  button2.style('background-color',col1)
  button2.style('border-radius', '10px');
  button2.mousePressed(firstPage);

  button2 = createButton('Funky Piano');
  button2.position(270, 30);
  button2.style('color: black')
  button2.style('font-family: "Pixelify Sans"')
  button2.style('background-color',col1)
  button2.style('border-radius', '10px');
  button2.mousePressed(secondPage);

  button4 = createButton('Who am I?');
  button4.position(390,30);
  button4.style('color: black')
  button4.style('font-family: "Pixelify Sans"')
  button4.style('background-color',col1)
  button4.style('border-radius', '10px');
  button4.mousePressed(fourthPage);

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

function fourthPage() {
  window.location.href = 'page4.html';
}

function draw() {
  background(random(0,220),10);
  for (i=0;i<400;i+=2){
    translate(width/2,height/2)
    rotate(radians(frameCount))
    fill(200)
    n = noise(COUNTER)
    if (mouseX>100||mouseX<-100){
    line(mouseX,mouseY,n,200-i)
    }
    
    }
  
}