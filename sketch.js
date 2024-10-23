let pic;
let title, paragraph; 
let song; 
let rectangles = [];
let x = 0;
let y = 0;
let xDir = 2;
let yDir = 2;
let z = 0;
let g = 0;

function preload(){
    song = loadSound("MusicIsMath.mp3");
  }

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup () {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

title = select("#id1");
paragraph = select("#id2")
textButton = select("#id3")
body = select("body")

song.stop()

for (let i = 0; i < 5; i++) {
  rectangles.push(new Rectangle());
}

}

function draw() {
  background(230, 230, 250);

  let g = g + yDir
  let z = z + xDir

  title.position(z,g)
  
  if (z > width || z < 0){
    xDir *= -1;
  }
  if (g > height || g < 0){
    yDir *= -1;
  }

  paragraph.position(z + 45, g + 45);
  
for (const rectangle of rectangles) {
  rectangle.move();
  rectangle.display();
}
}

class Rectangle {
  constructor() {
    this.x = 20;
    this.y = height - 80;
    this.w = 40;
    this.h = 40;
    this.xSpeed = random(10,20);
    this.ySpeed = random(10,15);
    this.color = color(random(0,40),random(40,255),random(100,150))
  }
  
  move() {
    
    this.ySpeed += 0.1;
    this.y += this.ySpeed;
    this.x += this.xSpeed;

 if (this.x < 0 || this.x > width - this.w) {
      this.xSpeed *= -1;
      song.play()
    }
    if (this.y < 0 || this.y > height - this.h) {
      this.ySpeed *= -1;
      song.play()
    }
  }
  
  display() {
    fill(this.color)
    rect(this.x,this.y,this.w,this.h)
  }
}