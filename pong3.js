
var dBall = 100
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = -dBall
var minSpeed = 4
var maxSpeed = 16
var xSpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
var ySpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
var startCounter = 0
var initialHue = Math.random(1000)
var color1 = {
  h: initialHue,
  s: 500,
  b: 1000
}
var bgOpacity = 1000


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1000)
}

function draw() {
  background((color1.h)%1000,500, 1000, bgOpacity);
  noStroke()

  fill(color1.h, color1.s, color1.b);
  xBall += xSpeed;
  yBall += ySpeed;
  color1.h = (color1.h+1)%1000
  color1.s += 1
  startCounter += 1
  ellipse(xBall, yBall, dBall, dBall);

  fill(0,0,600)
  rect(0,height-15,width,15)
  fill(0,0,100)
  rect(mouseX-45,windowHeight-15, 90, 15);

  bgOpacity = 0

  if(xBall>windowWidth-dBall/2 || xBall<dBall/2){
    xSpeed *= -1;
  } 

  if(yBall<dBall/2 && startCounter>40){
    ySpeed *= -1
  }

  if(yBall>windowHeight-dBall/2){
    if(xBall > mouseX-45 && xBall < mouseX+45){
      ySpeed *= -1
      color1.h = random((initialHue-100)%1000, (initialHue+100)%1000)
      color1.s = 500
    }else if(yBall>windowHeight+dBall/2) {
      bgOpacity = 1000
      yBall = -dBall
      startCounter = 0
      xSpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
      ySpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
      initialHue = Math.random(1000)
    }
  }
  
}
