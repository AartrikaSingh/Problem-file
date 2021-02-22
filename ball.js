class Ball extends BaseClass{
    constructor(x,y,r){
        super(x,y,50,50);
            this.image = loadImage("Superhero-01.png");
            restitution:0.5,
            friction:0.1
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop();
    }
}