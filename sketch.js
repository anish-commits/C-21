var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";
  //rect1.velocityY= -4;
  rect2 = createSprite(400,100,100,100);
  rect2.shapeColor = "yellow";
  //rect2.velocityY = 4;
  rect3 = createSprite(600,100,70,70);
  rect3.shapeColor= "blue";
  rect3.velocityY = 4;
  rect4 = createSprite(600,250,90,90);
  rect4.shapeColor = "pink";
  rect4.velocityY = -4;
}

function draw() {
background("black");  
rect2.x = mouseX;
rect2.y = mouseY;

 if(checktouching(rect2,rect4)){
  rect2.shapeColor = "red";
 } else {
   rect2.shapeColor = "yellow";
 }
bounce(rect3,rect4);
  drawSprites();
}
