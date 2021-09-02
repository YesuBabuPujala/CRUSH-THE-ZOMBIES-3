class Link {
    constructor(BodyA, BodyB){
        var lastlink = BodyA.body.bodies.length-2;
        this.link = Matter.Constraint.create({
            bodyA:BodyA.body.bodies[lastlink],
            bodyB:BodyB,
            length:-10,
            stiffness:0.06,
        })
        Matter.World.add(engine.world, this.link)
    }
}