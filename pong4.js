var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 300) + 50;
var xSpeed = (6, 10);
var ySpeed = (-6, -9);
var bgGray = 200
var squeezer = 0
var squeezerGrow = 0
var score = 0
var myColor = {r: 115, g: 255, b: 0}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
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

  if(yBall>windowHeight-35){
    if(xBall > mouseX-45 && xBall < mouseX+45 && ySpeed>0){
      ySpeed *= -1
      squeezer += height/50
      bgGray -= 5
      score ++
    } else if(yBall>windowHeight-20)  {
      squeezerGrow = 30
      textAlign(CENTER, CENTER)
      if (score > 46){
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
