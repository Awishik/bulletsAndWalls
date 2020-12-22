var car, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed= random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  car=createSprite(50, 200, 50, 10);
  car.debug=true;
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  wall.debug=true;
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if (wall.x-car.x< (car.width+wall.width)/2) {
    car.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if (damage<180) {
      wall.shapeColor=color(255,0,0)
    }

    if (damage<100) {
      wall.shapeColor=color(0,255,0)
    }

  }

  drawSprites();
}