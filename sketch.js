var border1,border2,border3,border4;
var ball;

function setup() {
	createCanvas(800, 700);
	border1=createSprite(550,610,20,120);
	border2=createSprite(700,610,20,120);
	border3=createSprite(550,700,8000,25)
	border4=createSprite(625,680,170,20)
	ball=createSprite(90,667,40,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  	border3.shapeColor="yellow";
	border4.shapeColor="white";
	border2.shapeColor="white";
	border1.shapeColor="white";
	ball.shapeColor="magenta";
  drawSprites();
 
}



