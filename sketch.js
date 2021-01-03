
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,bob6;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1=new ball(170,600,40);
    bob2=new ball(250,600,40);
    bob3=new ball(330,600,40);
    bob4=new ball(410,600,40);
    bob5=new ball(490,600,40);
   // ball6=new ball(570,600,40);

    roof=new Ground(340,150,540,70)

    rope1=new rope(bob1.body,roof.body,-bob1.Diameter*2,0);
    rope2=new rope(bob2.body,roof.body,-bob2.Diameter*2,0);
    rope3=new rope(bob3.body,roof.body,-bob3.Diameter*2,0);
    rope4=new rope(bob4.body,roof.body,-bob4.Diameter*2,0);
    rope5=new rope(bob5.body,roof.body,-bob5.Diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(200)
  rectMode(CENTER);
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // ball6.display();
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



