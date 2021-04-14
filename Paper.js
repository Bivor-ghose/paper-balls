class Paper {
    constructor(x,y,r) {
        var options={
            //isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body= Bodies.circle(x,y,(r-20)/2,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
      
        
        push()
         var pos=this.body.position;
        translate (pos.x, pos.y)
        imageMode(CENTER)
        image(this.image,200,575,100,100);
        pop()
    }
}