class Ground {
    constructor(x, y,w,h) {
      var options = {
          'restitution':0.8,
          isStatic:true 
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      fill("red"); 
      stroke("red");
        rect(0, 0, this.width, this.height);
      pop();
    }
  };
  