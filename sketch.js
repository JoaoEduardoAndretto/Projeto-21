
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function setup() {
	createCanvas(1000, 520);


	engine = Engine.create();
	world = engine.world;

	var ball_options =
	{
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	var ground_options = 
	{
		isStatic: true
	};

	ground = Bodies.rectangle(200,500,1600,15,ground_options);
    World.add(world,ground);

	ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball); 

	wall = Bodies.rectangle(610,455,15,80,ground_options);
    World.add(world,wall);

	wall2 = Bodies.rectangle(760,455,15,80,ground_options);
    World.add(world,wall2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  if (keyDown (UP_ARROW)) 
  {
	Matter.Body.applyForce(ball,ball.position,{x:65,y:-65 })
  }
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1600,15);
  
  rect(wall.position.x,wall.position.y,15,80);
  rect(wall2.position.x,wall2.position.y,15,80);


}



