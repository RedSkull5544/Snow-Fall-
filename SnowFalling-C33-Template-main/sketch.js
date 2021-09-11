const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowFlakes;
var snowball;
var snowImg;
var engine,world;

function preload(){
  snowFlakes=loadImage("snow3.jpg");
  snowImg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  snowball=Bodies.circle(80,20,50);
  World.add(world,snowball);
  Engine.run(engine);
}

function draw() {
  background(snowFlakes);  
 image(snowImg,snowball.x,snowball.y,100,100);
}