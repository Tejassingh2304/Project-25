
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, d1,d2,d3;

function preload()
{
	
  
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground= new Ground (600,height,1200,20)
   ball= new Ball (50,660,30,30)
   //d1 = new Dustbin (900,790,300,7)
   d2 = new Dustbin (950,700,150,100)
   //d3 = new Dustbin (1050,750,7,70)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground.display();
  ball.display();
  //d1.display();
  d2.display();
  //d3.display();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
}}



