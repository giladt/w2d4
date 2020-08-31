class Game {
  constructor(){

    
    this.state = {
      distance : 10,                 // scalar
      center   : [0, 0, 0],         // vector
      rotation : [0, 0, 0, 0],  // quaternion
    };
    
  }
  
  preload(defs) {
    this.state.distance = defs.d;
    this.state.center = defs.c;

  }
  
  setup() {

  }

  draw() {
    // this.easy.setState(this.state);

    rotateX(this.state.center[0]);
    rotateY(this.state.center[1]);
    rotateZ(this.state.center[2]);
    box(this.state.distance);

  }

}