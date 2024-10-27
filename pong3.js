
var dBall = 100
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = -dBall
var minSpeed = 8
var maxSpeed = 16
var xSpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
var ySpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
var startCounter = 0
var initialHue = Math.random()
var color1 = {
  h: initialHue,
  s: 0.8,
  b: 0.1
}
var bgOpacity = 1000


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1)
}

function draw() {
  background(color1.h, 0.4, 0.2, bgOpacity);
  noStroke()

  fill(color1.h, color1.s, color1.b);
  xBall += xSpeed* noise(0.01 * frameCount);
  yBall += ySpeed;
  color1.b = map(sin(frameCount/100),-1,1,0.2,1)
  startCounter += 1
  ellipse(xBall, yBall, dBall, dBall);

  fill(color1.h, 0.2, 0.8)
  rect(0,height-15,width,15)
  fill(color1.h, 0.4, 0.2)
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
    }else if(yBall>windowHeight+dBall/2) {
      bgOpacity = 1000
      yBall = -dBall
      startCounter = 0
      xSpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
      ySpeed = Math.floor(Math.random() * (maxSpeed-minSpeed)) + minSpeed
      initialHue = Math.random()
      console.log(initialHue)
      color1.h = initialHue
      color1.s = 0.8
    }
  }
  
}
