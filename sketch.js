
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new GroundClass (400,390,800,20)
  ground2 = new GroundClass(350,360,400,10);
  ball = new BallClass(100,50,30,30);
  rope = new RopeClass(ball.body,{x:100, y:40});
  box1 = new buldingClass(350,360,40,40);
  box2 = new buldingClass(450,260,50,50);
  box3 = new buldingClass(650,160,60,50);
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();
  ground2.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}