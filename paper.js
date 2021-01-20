class Paper
{
constructor(x,y)
{
var options={
isStatic:false,
restitution:1.2,
friction:0.5,
density:1.2
}
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("paper.png");

	   this.scale=0.1;
        World.add(world, this.body);
}
display()
{
	var angle = this.body.angle;
	push();
	translate(this.body.position.x, this.body.position.y);
	rotate(angle);
	imageMode(CENTER);
	image(this.image, 150, 600, 60,60);

	pop();
}
}