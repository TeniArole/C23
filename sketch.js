


const Engine=Matter.Engine 

const World= Matter.World 

const Bodies= Matter.Bodies


// object
var engine, world
var ground; 
var box1, box2

function setup() { 
  createCanvas(800,400); 

  engine=Engine.create(); 

  world= engine.world; 


 box1= new Box(220, 100, 50, 50);
 box2= new Box(200, 200, 50, 100)
 ground= new Ground(400, 396, 800, 20)


} 
  

function draw() { 
    background("grey"); 
    //update the engine
    Engine.update(engine); 
    box1.display();
    box2.display();
    ground.display();
   }
   
