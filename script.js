var loader = document.querySelector('.loader');
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var posX = windowWidth / 2;
var posY = windowHeight / 2;
var directionX = 1;
var directionY = 1;
var speed = 1;
var max = 20;

loader.addEventListener('click', init_moveBall);
function init_moveBall() {setInterval(moveBall, 10);}
function moveBall() {
  posX += directionX * speed;
  posY += directionY * speed;
  if (posX + loader.offsetWidth >= windowWidth || posX <= 0) {
    directionX = -directionX;
  }
  
  if (posY + loader.offsetHeight >= windowHeight || posY <= 0) {
    directionY = -directionY;
  }
  loader.style.left = posX + 'px';
  loader.style.top = posY + 'px';
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (max != 0){
            increaseSpeed();
            max --;
        }
    }
});
function increaseSpeed() {
  speed *= 1.3;
}

