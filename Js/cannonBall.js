class CannonBall{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,30,options)
        World.add(world,this.body)
        this.radius = 30

        this.image = loadImage("assets/cannonBall.png")
        
    }
     display() {
         push()
         imageMode(CENTER)
         image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
         pop()
     }
     shoot() {
        var newAngle = cannon.angle - 28
        newAngle = newAngle*(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x: velocity.x*(180/3.14), y: velocity.y*(180/3.14)})

     }
}