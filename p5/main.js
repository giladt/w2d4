
const box1 = new Game();
const box2 = new Game();

function preload(){
  box1.preload({
    d: 100,
    c: [0,0,0]
  });
  // box2.preload({
  //   d: 50,
  //   c: [150,100,0]
  // });
}

function setup(){
  createCanvas(1100,1000, WEBGL);
  box1.setup();
  box1.setup();
}

function draw(){
  box1.draw();
  box2.draw();
}

function keyPressed() {
  console.log(keyCode, box1.state);
  switch(keyCode){
    case 37: //left
      box1.state.center[0] += 0.1;
      break;
    case 39: //right
      box1.state.center[0] -= 0.1;
      break;
    case 38: // up
      box1.state.center[1] -= 0.1;
      break;
    case 40:  // down
      box1.state.center[1] += 0.1;
      break;
    case 81:
      box1.state.center[2] += 0.1;
      break;
    case 65:
      box1.state.center[2] -= 0.1;
      break;
    case 87:
      box1.state.distance += 2;
      break;
    case 83:
      box1.state.distance -= 2;
      break;
  }
}    
