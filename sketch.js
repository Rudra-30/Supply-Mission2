var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftwall,rightwall,bottomwall,wall;
var wall1,wall2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    leftwall   = createSprite (300,625,17,90);
    rightwall  = createSprite (470,610,17,120); 
	bottomwall = createSprite (370,660,100,17);
	wall       = createSprite (420,570,150,17);
    wall1      = createSprite (420,590,15,36);
    wall2      = createSprite (340,584,15,45);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4,isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	leftwall   = Bodies.rectangle(width/2,615,17,90,{restitution:0.4,isStatic:true});
	World.add(world,leftwall);

	rightwall  = Bodies.rectangle(width/2,610,17,120,{restitution:0.4,isStatic:true});
	World.add(world,rightwall);

    bottomwall = Bodies.rectangle(width/2,650,100,17,{restitution:0.4,isStatic:true});
    World.add(world,bottomwall);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



