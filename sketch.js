var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,100);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW))  {
    ball.x +=2
  }

  if(keyIsDown(LEFT_ARROW))  {
    ball.x -=2
  }

  if(keyIsDown(UP_ARROW))  {
    ball.y -=2
  }

  if(keyIsDown(DOWN_ARROW))  {
    ball.y +=2
  }

  drawSprites();
}




