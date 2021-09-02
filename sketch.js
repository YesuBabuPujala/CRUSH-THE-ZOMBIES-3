const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var rfl;

function preload(){

  Zombie_img = loadImage("./assets/zombie.png");
  zombie1 = loadImage("./assets/zombie1.png");
  zombie2 = loadImage("./assets/zombie2.png");
  zombie3 = loadImage("./assets/zombie3.png");
  zombie4 = loadImage("./assets/zombie4.png");

  backgroundImage = loadImage("./assets/background.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(6, {x:250, y:30});

  fruit = Bodies.circle(250, 300, 16, {density:0.002});
  Matter.Composite.add(rope.body, fruit)
  rfl = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  Zombie_img = createSprite(width/2, height-110);
  Zombie_img.addAnimation("lefttoright", zombie1, zombie2, zombie3);
  Zombie_img.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  Zombie_img.scale = 0.1;
  Zombie_img.velocityX = 10;

  Zombie_img.addImage("sad");

  breakButton = createButton("");
  breakButton.position(width-200, height/2-50);;
  breakButton.class("breakbutton");
  breakButton.mousePressed(handledButtonPress);

  for (var stone of stones) [
    stone.show();
    
    var pos  = stonne.body.position;
    var distance = dist(zommbie.position.x, zommbie.position.y, pos.x, pos.y);
    if (distance <= 50) {
      zombie.velocityX = 0;
      Matter.Body.setVelocity(stone.body, { x:10, y:-10});
      zombie.changeImage("sad");
      collided = true;
    } 
  ]

  ellipse(fruit.position.x, fruit.position.y, 16, 16);
  
  Engine.update(engine);
  

 drawSprites();
   
}

function createButton() {

}

function handleButtonPress() {
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}
