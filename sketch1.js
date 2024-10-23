let rectangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectangle = new Rectangle();
  for (let i = 0;i< 20;i++) {
    rectangles.push(new Rectangle())
  }
  rectMode(CENTER)
}

function draw() {
  clear();
  
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
    this.xSpeed = random(-10,10);
    this.ySpeed = random(-10,10);
    this.color = color(random(0,40),random(40,255),random(100,150))
  }
  
  move() {
    
    this.ySpeed += 0.1;
    this.y += this.ySpeed;
    this.x += this.xSpeed;

 if (this.x < 0 || this.x > width - this.w) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height - this.h) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(this.color)
    rect(this.x,this.y,this.w,this.h)
  }
}