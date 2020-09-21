var fixedRect, movingRect;
var gameobj1, gameobj2, gameobj3, gameobj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj1 = createSprite(100,400,50,50);
  gameobj2 = createSprite(800,400,50,50);
  gameobj3 = createSprite(600,500,50,50);
  gameobj4 = createSprite(600,800,50,50);
  
  gameobj1.velocityX=5;
  gameobj2.velocityX=-7;
  gameobj3.velocityY=8;
  gameobj4.velocityY=-10;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameobj1,gameobj2); 
  bounceOff(gameobj3,gameobj4);
  drawSprites();
}
