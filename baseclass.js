class Baseclass{
    constructor(x,y,width,height,angle){
        var options = {
         friction : 0.5,
         restitution : 0.5,
         density : 1
        }
     
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
     this.image = loadImage("sprites/base.png");
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        fill("red")
       
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }


}

