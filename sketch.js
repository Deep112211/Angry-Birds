const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3, box4, box5;

var bird;

var pig1, pig2;

var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 380, 50, 50);
    box2 = new Box(300, 380, 50, 50);
    box3 = new Box(200, 300, 50, 50);
    box4 = new Box(300, 300, 50, 50);
    box5 = new Box(250, 250, 50, 50);

    ground = new Ground(200,height,400,20);

    bird = new Bird(100, 100);

    pig1 = new Pig(250, 380);
    pig2 = new Pig(250, 300);

    log1 = new Log(250, 350, 150, PI / 2);
    log2 = new Log(250, 290, 150, PI / 2);
    log3 = new Log(240, 230, 100, PI / 5);
    log4 = new Log(270, 230, 100, PI / -5);
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);

    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    bird.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
}