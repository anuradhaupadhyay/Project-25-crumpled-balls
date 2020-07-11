var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	var options={
		isStatic:true
	}
	ground = Bodies.rectangle(400,680,800,20,options);
	World.add(world, ground);
	 
	ball = new Paper(100,600,70);
	
	dustbin1 = new Dustbin(500,600,200,50);
	
	//var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });
	//Render.run(render);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
//console.log(ball.body.position.x)
  //100
 console.log(ball.body.position.y) 
  rect(ground.position.x, ground.position.y, 800,20);
  ball.displayPaper();
  dustbin1.displayDustbin();

  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW&&(ball.body.position.x===100)&&(ball.body.position.y>=646&&ball.body.position.y<=647)){
		var options={
			x:0.03,
			y:-0.11
		}
		Body.applyForce(ball.body,ball.body.position,options);
	}
}