var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
 
  thickness = random(223,321);
  speed = random(55,90);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = (25,55,255);

  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  console.log(speed);
  console.log(weight);
  console.log(thickness);
  
}

function draw() {
  background(25,40,33); 
  
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }

  if(bullet.isTouching(wall) && 0.5*weight*speed*speed/thickness*thickness*thickness > 10){
    wall.shapeColor = "red"
  }
  
  if(bullet.isTouching(wall) && 0.5*weight*speed*speed/thickness*thickness*thickness < 10){
    wall.shapeColor = "green"
  }
  
  
  
  drawSprites();
}