var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 300) + 50;
var xSpeed = (Math.random()*10)+5
var ySpeed = (Math.random()*-6)-5
console.log(xSpeed)
var bgGray = 200
var squeezer = 0
var squeezerGrow = 0
var score = 0
var myColor = {r: 115, g: 255, b: 0}

function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke()
  frameRate(120)
}

function draw() {
  background(bgGray,bgGray,bgGray);
  
  fill(20)
  rect(mouseX-45,height-20, 90, 2);
  rect (0, 0, width, squeezer)

  xBall += xSpeed;
  yBall += ySpeed;
  squeezer += squeezerGrow

  fill(myColor.r, myColor.g, myColor.b);
  ellipse(xBall, yBall, 20, 20);

  if(xBall>windowWidth-10 || xBall<10){
    xSpeed *= -1;
  } 

  if(yBall<squeezer+10){
    ySpeed *= -1
  }

  if(yBall>windowHeight-45){
    if(xBall > mouseX-45 && xBall < mouseX+45 && ySpeed>0){
      ySpeed *= -1
      squeezer += height/30
      bgGray -= 5
      score ++
      ySpeed *=1.05
      xSpeed *=1.05
    } else if(yBall>windowHeight-20)  {
      squeezerGrow = 15
      textAlign(CENTER, CENTER)
      if (score > 25){
      textSize(width/2.2);
      text("good", width/2, height/2+height*0.1)}
      else {
      myColor.r = 255
      myColor.g = 100
      fill(myColor.r, myColor.g, myColor.b);
      textSize(width/2);
      text("bad", width/2, height/2+height*0.1)
      }
      ySpeed = 0
      xSpeed = 0
      console.log(score)
    }
  }

}
