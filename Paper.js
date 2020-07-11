class Paper{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:1,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,diameter/3);
        this.diameter=diameter;
        this.image=loadImage("paper.png");
        Matter.World.add(world,this.body);
    }
    displayPaper(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        //fill("purple");
        image(this.image,0, 0, this.diameter,this.diameter);
        pop();
    }
}