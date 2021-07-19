function setup() {
  createCanvas(400,400);
}

function draw() 
{
  if(keyDown("right")){
    background('blue')
  }

  if(keyDown("left")){
    background('purple')
  }

  if(keyIsDown(UP_ARROW)){
    background('silver')
  }

  if(keyIsDown(DOWN_ARROW)){
    background('black')
  }

  drawSprites()
}  