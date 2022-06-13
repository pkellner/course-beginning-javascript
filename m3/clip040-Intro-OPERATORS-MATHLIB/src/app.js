const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

context.fillStyle = "green";
context.fillRect(10, 10, 150, 100);

const sunPosition = {
  x: 190,
  y: 150,
};

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
};

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawStar(context, { color, name, radius, x, y }) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();
}

clear(context);
drawStar(context, sunData);
