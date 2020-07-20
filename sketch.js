
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin,paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow") 

	dustbin1 = new Dustbin(595,300,20,140);
	dustbin2 = new Dustbin(655,362,100,18);
	dustbin3= new Dustbin(715,300,20,140);
	//dustbin1 = new Dustbin(710,590,20,100);
	//dustbin2 = new Dustbin(490,590,20,100);
	paper = new Paper(80,200,50,50);
	ground= new Ground(400,380,900,20);
	
	     
	

	//Create the Bodies Here.


	Engine.run(engine);
  
	/*var option={
   isStatic:false,
   restitution:0.3,
   friction:0.3,
   density:1.2
	}/*/
}


function draw() {

  background(0);
  
  ground.display();
  paper.display();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed () {

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-180});
	}
}

