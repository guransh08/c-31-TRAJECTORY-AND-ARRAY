class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.s1=loadImage("sprites/sling1.png")
        this.s2=loadImage("sprites/sling2.png")
        this.s3=loadImage("sprites/sling3.png")
    }
attach(body){
    this.sling.bodyA=body
}
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
    
        var pointB = this.pointB;
push ()
stroke (48,22,8)
        if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y);
            image(this.s3,pointA.x-30,pointA.y-10,15,30)
        }
        else{

            strokeWeight(4);
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+20, pointA.y+20, pointB.x+25, pointB.y);
            image(this.s3,pointA.x+20,pointA.y-10,15,30)
        }
        
     
     pop ()
    }
    image(this.s1,200,20)
     image(this.s2,170,20)
}
    
}