var canvas, ctx, w, h;

var ball = {
  x: 10,
  y: 10,
  radius:10,
  color: 'red',
  speedX: 1,
  speedY: 1
}

window.onload = init;

function init(){

canvas = document.querySelector('#myCanvas');
ctx = canvas.getContext('2d');

w = canvas.width;
h = canvas.height;

mainLoop();
}

function mainLoop(){
  // clear the canvas
  ctx.clearRect(0, 0, w, h);

  drawCircle(ball);

  moveBall(ball);

  requestAnimationFrame(mainLoop);

}

function moveBall(b){
  b.x += b.speedX;


  testCollisionWithWalls(b);
}

function testCollisionWithWalls(b){
  if((b.x+b.radius)>w){
    b.speedX = -b.speedX;

    b.x = w - b.radius;
  } else if((b.x-b.radius)<0){
    b.speedX = -b.speedX;
    b.x = b.radius;
  }
}

function drawCircle(b){
  // save context
  ctx.save();

  ctx.translate(b.x, b.y);

  ctx.fillStyle = b.color;

  ctx.beginPath();

  ctx.arc(0, 0, b.radius, 0, 2*Math.PI);

  ctx.fill();

  ctx.restore();

}
