const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies


var score=0
var estilingue
var fundo
var engine, world;
var box1,box2,ground,enemy,pedra,tronco,troncoligado;
var base
var enemy2
var box3 , box4
var gamestate = "preso"
var bg = "sprites/bg.png"
function preload(){
   // fundo = loadImage("sprites/bg.png");
   gettime()
 }



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box2 = new Box (800,335,50,50);
    box1 = new Box(950,335,50,50);
    ground = new Chao(width/2,390,width,20);
    tronco = new Log(872,330,200,PI/2)
    pedra = new Pedra(210,100);
    troncoligado = new Log(872,100,200,PI/2)
    estilingue= new Estilingue(pedra.body,{x:210,y:100})
    base = new Chao(150,400,350,300);
    box3 = new Box(800,250,50,50);
    box4 = new Box(950,200,50,50);
    enemy = new Enemy(230,400)
    enemy2 = new Enemy(530,100)
}





function draw(){
   if(fundo){
   background(fundo);
   }
    Engine.update(engine);
    box2.display();
    box1.display();
    ground.display();
    tronco.display();
    estilingue.display();
    troncoligado.display();
    base.display();
    pedra.display();
    box3.display();
    box4.display();
    enemy.score();
    enemy2.score();
    enemy.display();
    enemy2.display();
    text(mouseX+","+mouseY,mouseX,mouseY)
     textSize(30)
     fill("white")
    text("score: "+score,600,50)
  }
 function mouseDragged(){
    
  if(gamestate!=="soolto"){
    Matter.Body.setPosition(pedra.body,{x:mouseX,y:mouseY})
  }
    }
    
 function mouseReleased(){
     estilingue.fly()
     gamestate = "soolto"
 }
 function keyPressed(){
   if(keyCode===32){
     estilingue.prender(pedra.body)  
     gamestate = "preso"
     pedra.trajetoria =[]
     Matter.Body.setPosition(pedra.body,{x:200,y:100})
    }
   
   }
  async function gettime(){
  var resposta = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var respostajson = await resposta.json()
   console.log(respostajson)
  var datetime = respostajson.datetime
  var hour = datetime.slice(11,13)
     if(hour>=06&&hour<=18){
      bg="sprites/bg.png"
     }
     else{
       bg="sprites/bg2.jpg"
     }
     fundo = loadImage(bg)
    }