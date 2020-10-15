class Bob{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restituion:0.3,
            friction:0.5,
            density:1.2
        }

       this.bob=Matter.Bodies.circle(x,y,radius,options);
	    World.add(world,this.bob);
    
    }

display(){
    ellipseMode(RADIUS);fill("blue")
    ellipse(this.bob.position.x,this.bob.position.y,20,20);
}
    
}
  