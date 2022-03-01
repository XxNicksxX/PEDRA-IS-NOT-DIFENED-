class Estilingue{


constructor(bodyA,pointB){
  var options = {
     bodyA:bodyA ,
     pointB:pointB , 
     stiffness:0.05 ,
     length:5 
  }  
 this.sling1=loadImage("sprites/sling1.png")
 this.sling2=loadImage("sprites/sling2.png")
 this.sling3=loadImage("sprites/sling3.png")
 this.sling = Matter.Constraint.create(options)
 this.pointB = pointB
 World.add(world,this.sling);
 
}
 fly(){
  this.sling.bodyA=null  
   }
 display(){
 if(this.sling.bodyA){
 var pontoA = this.sling.bodyA.position
 var pontoB = this.pointB
    push()
      if(pontoA.x<220) {
         stroke("#321C0E")
         strokeWeight(10)
         line(pontoA.x-20,pontoA.y,pontoB.x-20,pontoB.y);
         line(pontoA.x-20,pontoA.y,pontoB.x+20,pontoB.y);
         image(this.sling3,pontoA.x-25,pontoA.y-10,15,30)
      }else{
         stroke("#321C0E")
         strokeWeight(10)
         line(pontoA.x+20,pontoA.y,pontoB.x-20,pontoB.y);
         line(pontoA.x+20,pontoA.y,pontoB.x+20,pontoB.y);
         image(this.sling3,pontoA.x+25,pontoA.y-10,15,30)
      }
      
    pop()

   }
    image(this.sling1,200,60);
    image(this.sling2,170,60);
    
   
   
   }
    prender(body){
     this.sling.bodyA=body
    }
 

}