var car, wall;
var weight, speed;
var deformation;

function setup(){
  createCanvas(1300,400);
  wall=createSprite(1200,200,60,height/2);
  car=createSprite(50,200,50,50);

  weight=random(400,1500);
  speed=random(55,90);
  deformation=0.5*weight*speed*speed/22500;
  car.velocityX=speed;
}

function draw(){
  background(220);

  if (car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<wall.width/2+car.width/2){
      if (deformation>180){
        car.shapeColor=("red");
      }
      else if (deformation<100){
        car.shapeColor=("green");
      }
      else if (deformation>100 && deformation<180){
        car.shapeColor=("yellow");
      }
      car.velocityX=0;
    }

  drawSprites();

  text("Speed:  "+speed+" Km/hr", 100, 350);
  text("Weight:  "+weight+" Kg", 350,350);
  text("Deformation:  "+deformation+" Kg Km^2 h^-2", 600,350);
}