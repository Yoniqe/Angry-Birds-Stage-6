class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;//given the visibility property(0 is invisible, 255 is completely visible)
  }
  display(){
    console.log(this.body.speed);//printing the speed of pig
    if(this.body.speed<3){//if speed is less than 3 it means that the bird has not hit it
      super.display();//displays the pig
      
    }
    else{//if speed is more than 3 then pig has been injured
      World.remove(world,this.body);//removes the pig from the world
      push();//push and pop is written so that it applies only to the pig
      this.visibility = this.visibility-5;//decrease visibility by 5
      tint(255,this.visibility);//this creates the fading effect
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
};