const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,70,70);
    box2 = new Box(1000,320,70,70);
    box3 = new Box(800,300,70,70);
    box4 = new Box(1000,300,70,70);
    box5 = new Box(900,200,70,70);
    ground = new Ground(600,390,1200,20);
    pig1 = new Pig(900,370);
    log1 = new Log(900,300,280,PI/2);
    log2 = new Log(900,260,280,PI/2);
    log3 = new Log(850,120,150,PI/6);
    log4 = new Log(950,112,150,-PI/6);
    pig2 = new Pig(900,300);
    bird1 = new Bird(50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

}