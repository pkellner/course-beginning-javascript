const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

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
}

const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: Math.PI / 2,
  angleChangeRate: 0.013,
}

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSpaceObject(context, color, name, radius, x, y) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, Math.PI * 2, true); 
  context.fill();
  context.closePath();

  context.font = "9px monospace";
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.fillText(name, x, y - radius - 5);
}

function drawStar(context, { color, name, radius, x, y }) {
  drawSpaceObject(context, color, name, radius, x, y);
}

clear(context);
drawStar(context, sunData);

const planetX = sunPosition.x + earthData.dist * 1;
const planetY = sunPosition.y + earthData.dist * 0;
drawSpaceObject(context, earthData.color, earthData.name, earthData.radius,
  planetX, planetY);