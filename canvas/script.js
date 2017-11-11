var canvas, ctx, w, h;

var ball1 = {
  x: 100,
  y: 100,
  radius:100,
  color: 'red',
  speedX: 1,
  speedY: 1
}

var ball2 = {
  x: 20,
  y: 20,
  radius:20,
  color: 'green',
  speedX: 2,
  speedY: 2
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

  drawCircle(ball1);
  drawCircle(ball2);

  moveBall(ball1);
  moveBall(ball2);

  requestAnimationFrame(mainLoop);

}

function moveBall(b){
  if(b.x>=b.radius && b.x<w-b.radius && b.y==b.radius){
    b.x +=b.speedX;
} else if ((b.x<=w-b.radius && b.x>b.radius && b.y==h-b.radius)){
    b.x -= b.speedX;
} else if(b.x==w-b.radius && b.y>=b.radius && b.y<h-b.radius){
  b.y += b.speedY;
} else if(b.x==b.radius && b.y<=h-b.radius && b.y>b.radius){
  b.y -= b.speedY;
}

  //testCollisionWithWalls(b);
}

function testCollisionWithWalls(b){
  /*if((b.x+b.radius)>=w){
    b.speedX = -b.speedX;
    b.x = w - b.radius;
  } else if((b.x-b.radius)<0){
    b.speedX = -b.speedX;
    b.x = b.radius;
  }*/
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
