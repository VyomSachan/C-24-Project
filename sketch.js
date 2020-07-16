
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(40, 650);
	dustbinBase = new Dustbin(650, 660, 200, 20);
	dustbinPart1 = new Dustbin(540, 620, 20,100);
	dustbinPart2 = new Dustbin(740, 620, 20, 100);
	ground = new Ground(width/2, 680, width, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  paper.display(); 
  dustbinBase.display();
  dustbinPart1.display();
  dustbinPart2.display();
  ground.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:36, y:-36});
	}
}