class Dustbin{
constructor(x1,y1,w1,h1){
var x2 = x1-(w1/1.8);
var y2 = y1-(w1/2);
var x3 = x1+(w1/1.8);
var y3 = y1-(w1/2);
 this.body1 = Matter.Bodies.rectangle(x1,y1,w1,h1);
 this.body2 = Matter.Bodies.rectangle(x2,y2,h1,w1);
 this.body3 = Matter.Bodies.rectangle(x3,y3,h1,w1);
 this.width1 = w1;
 this.height1 = h1;
 this.width2 = h1;
 this.height2 = w1;
 this.width3 = h1;
 this.height3 = w1;
 this.image = loadImage("dustbingreen.png")
 World.add(world,this.body1);
 World.add(world,this.body2);
 World.add(world,this.body3);
}
displayDustbin(){
    /*push();
    translate(this.body1.position.x,this.body1.position.y)
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width1, this.height1);
    pop();

    push();
    translate(this.body2.position.x,this.body2.position.y)
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width2, this.height2);
    pop();

    push();
    translate(this.body3.position.x,this.body3.position.y)
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width3, this.height3);
    pop();*/

    push();
    //translate(this.body1.position.x,this.body1.position.y)
    imageMode(CENTER);
    //fill("yellow");
    image(this.image,this.body1.position.x, this.body2.position.y, this.width1, this.height2);
    pop();
   }
}