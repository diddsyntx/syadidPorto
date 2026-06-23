const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 250;
let x = 50;
let y = 50;
let speedx = 5;
let speedy = 5;
let radius = 15;
let color = "red";
function bola() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  window.requestAnimationFrame(bola);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.stroke();
  ctx.fill();

  if (x + radius > canvas.width || x - radius < 0) {
    speedx = -speedx;
  }
  if (y + radius > canvas.height || y - radius < 0) {
    speedy = -speedy;
  }

  x += speedx;
  y += speedy;
}

bola();
