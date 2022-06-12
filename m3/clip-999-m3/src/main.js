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
};

const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: 1.570796, // 90 degrees
  angleChangeRate: 0.013,
};

function drawSpaceObject(name, color, radius, x, y) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0,3.14159265 * 2, true);
  context.fill();
  context.closePath();

  context.font = "9px monospace";
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.fillText(name, x, y - radius - 5);
}

// object spreading
function drawStar({
  name: starName,
  color: starColor,
  radius: starRadius,
  x: xStar,
  y: yStar,
}) {
  drawSpaceObject(starName, starColor, starRadius, xStar, yStar);
}

function drawOrbit(x, y, dist) {
  context.beginPath();
  context.arc(x, y, dist, 0, 3.14159265 * 2, true);
  context.lineWidth = 0.5;
  context.strokeStyle = "white";
  context.stroke();
  context.closePath();
}

clear();
drawStar(sunData);

const planetX = sunX + earthData.dist * 1; // Math.sin(earthData.angle);
const planetY = sunY + earthData.dist * 0; // Math.cos(earthData.angle);
drawSpaceObject(
  earthData.name,
  earthData.color,
  earthData.radius,
  planetX,
  planetY
);
drawOrbit(sunX, sunY, earthData.dist);

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
