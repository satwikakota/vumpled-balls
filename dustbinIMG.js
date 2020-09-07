class DustbinIMG {
    constructor(x, y,w,h) {
      var options = {
          isStatic:true 
      }
      this.image=loadImage("Sprites/dustbingreen.png"); 
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(0,0);
      translate(pos.x, pos.y); 
      imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
      pop();
    }
  };
  