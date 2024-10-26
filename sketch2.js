let blackKeyApp = [1, 1, 0, 1, 1, 1, 0];
let osc;
let whiteNotes = [100,190,200,290,300,390,400]
let blackNotes = [200,290,300,390,430,490,500]
let p = false
let button1;
let button2;
let button3;
let button4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('sine');

  col1 = color('#C6FCFF')

  button1 = createButton('Home Page');
  button1.mousePressed(homePage);
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

  button3 = createButton('Into the Void');
  button3.position(270,30);
  button3.style('color: DarkGreen')
  button3.style('font-family: "Pixelify Sans"')
  button3.style('background-color',col1)
  button3.style('border-radius', '10px');
  button3.mousePressed(thirdPage);

  button4 = createButton('Who am I?');
  button4.position(390,30);
  button4.style('color: DarkGreen')
  button4.style('font-family: "Pixelify Sans"')
  button4.style('background-color',col1)
  button4.style('border-radius', '10px');
  button4.mousePressed(fourthPage);

}

function homePage() {
  window.location.href = 'index.html';
}

function firstPage() {
  window.location.href = 'page1.html';
}

function thirdPage() {
  window.location.href = 'page3.html';
}

function fourthPage() {
  window.location.href = 'page4.html';
}

function draw() {
  background(map(mouseX,mouseY,240,100,240),noise(20,100),210,200);

   for (i=0;i<200;i+=2){
    x = i*25
    y = 0
    rectz = 49
    recth = 200
    
    
if (mouseX > x && mouseX < x + rectz && mouseY > y && mouseY < y + recth) {
  fill(255, 0, 200)
   if (!p) {
          let o = i % whiteNotes.length;
          play(whiteNotes[o])
        }
  } else {
    fill(255)
  } 
    rect(x,y,rectz,recth)

  }
  
  push()
  for (let i = 0; i < 50; i++) {
    if (blackKeyApp[i % blackKeyApp.length] == 1) {
      let x = i * 50 + 35
      let y = 0;
      let rectz = 28;
      let recth = 125;
   
  if (mouseX > x && mouseX < x + rectz && mouseY > y && mouseY < y + recth) {
    fill(255,20, 150)
    if (!p) {
          let q = i % blackNotes.length;
          play(blackNotes[q])
        }
  } else {
    fill(0)
  } 

    rect(x, 0, rectz, recth); 
    }
    }
    pop()
  
}

function play(frequency) {
  osc.freq(frequency);
  osc.start()
  p = true
}

function mouseReleased() {
  osc.stop()
  p = false;
}
