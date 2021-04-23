class Ground{
constructor(x,y,width,height){

    var optionsGround = {
    isStatic: true
    }
this.body = Bodies.rectangle(x,y,width,height,optionsGround);
this.width = width;
this.height = height;
World.add(world,this.body);
}
 display(){
     var rpos = this.body.position;
     fill("brown");
rectMode(CENTER);
rect(rpos.x,rpos.y,this.width,this.height);

 }
}