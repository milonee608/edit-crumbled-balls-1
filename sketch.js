
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,rope1,rope2,rope3,rope4,rope5,roof;
var bobDiameter=10;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1=new Bob(320,400,5);
	bobObject2=new Bob(360,400,5);
	bobObject3=new Bob(400,400,5);
	bobObject4=new Bob(440,400,5);
	bobObject5=new Bob(480,400,5);
  roof= new Roof(400,200,200,20);
	rope1=new Rope(roof.body,bobObject1.body,bobDiameter*2,0);
	rope2=new Rope(roof.body,bobObject2.body,bobDiameter*2,0);
	rope3=new Rope(roof.body,bobObject3.body,bobDiameter*2,0);
	rope4=new Rope(roof.body,bobObject4.body,bobDiameter*2,0);
	rope5=new Rope(roof.body,bobObject5.body,bobDiameter*2,0);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



