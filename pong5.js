let xBall = Math.floor(Math.random() * 300) + 50;
let yBall = Math.floor(Math.random() * 300) + 50;
let xSpeed = (6, 10);
let ySpeed = (-10, -6);

let dBall = 15
let dPaddle = dBall*5.7

let hue1 = Math.floor(Math.random() *360)
let hue2 = (hue1 + 180)%360

let hubbubBallList = []


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
  noStroke()
}

function draw() {
  console.log(hubbubBallList)

  background(hue2, 7, 95);


  //paddle
  push()
  fill(hue2, 40, 90);
  arc(mouseX,height-dBall-dPaddle/2, dPaddle, dPaddle, 0, PI);
  pop()

  //ball
  
  xBall += xSpeed;
  yBall += ySpeed;
  push()
  fill(hue1, 100, 80);
  ellipse(xBall, yBall, dBall, dBall);
  pop()

  //hubbub
  for (let hubbubBall of hubbubBallList){
    hubbubBall.show()
    hubbubBall.update()
  }


  //physics
  if(xBall>width-dBall/2 || xBall<dBall/2){
    xSpeed *= -1;
  } 

  if(yBall<dBall/2){
    ySpeed *= -1
  }

  if(yBall>height-dPaddle/2-1.5*dBall){
    if(xBall > mouseX-dPaddle && xBall < mouseX+dPaddle){
      ySpeed *= -1
      hubbubBallList.push(new hubbub)

    } else if(yBall>height) {
      xBall = 2*height
      xSpeed = 0
      ySpeed = 0
      for (let hubbubBall of hubbubBallList){
        hubbubBall.xSpeed = hubbubBall.xSpeed*0.8
        hubbubBall.ySpeed = hubbubBall.fallSpeed 
        hubbubBall.hue = hue2 }

      
    }
  }

}


class hubbub {
  constructor(){
    this.x = xBall
    this.y = yBall
    this.saturation = random(40, 80)
    this.brightness = random(40, 70)
    this.xSpeed = random(2, 20)
    this.ySpeed = random(-2, -20)
    this.fallSpeed = random(0.3, 0.8)
    this.hue = hue1
  }
  show() {
    push()
    fill(this.hue, this.saturation, this.brightness);
    ellipse(this.x, this.y, dBall, dBall);
    pop()
  }
  update() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    if(this.x>width-dBall/2 || this.x<dBall/2){
      this.xSpeed *= -1;
    } 
  
    if(this.y<dBall/2 || this.y>height-dBall/2){
      this.ySpeed *= -1
    }
   }
}