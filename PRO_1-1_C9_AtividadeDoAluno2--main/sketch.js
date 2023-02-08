var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,70,60);
  box.shapeColor="MediumSlateBlue"
}

function draw() 
{
  background(0,206,209);
if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-5;
  background(255,182,193)
}
if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+5;
  background(240,248,255)
}
if(keyIsDown(UP_ARROW)){
  box.position.y=box.position.y-5;
background(216,191,216)
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y=box.position.y+5;
  background(255,127,80)
}
  drawSprites();

}




