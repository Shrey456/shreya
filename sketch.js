var car, wall1;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  car = createSprite(500, 200, 50, 50);
  speed = random(60, 100)
  weight = random(500, 1600);
  

}
wall1 = createSprite(1500, 200, 60, height / 2)
wall1(80, 80, 80)

function draw() {
  background(255, 255, 255);
  

  car.velocityX = speed;
  if (car.x - wall1.x < wall1.wigth / 2 + car.width / 2) {
    car.shapeColor = "red";
    wall1.shapeColor = "green";

  }
  Deformation = 0.5 * weight * speed * speed / 22500



  drawSprites();
}