const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const sunX = canvas.width / 2; // operators
const sunY = canvas.height / 2;

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunX,
  y: sunY,
};

const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: Math.PI * .50, // 90 degrees
  angleChangeRate: 0.013,
};


if (!canvas) console.log("Impossible to get canvas");
if (!context) console.log("Impossible to get canvas context");

function drawSpaceObject(name, color, radius, x, y) {
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
  context.arc(x, y, dist, 0, Math.PI * 2, true);
  context.lineWidth = 0.5;
  context.strokeStyle = "white";
  context.stroke();
  context.closePath();
}

clear();
drawStar(sunData);

const planetX = sunX + earthData.dist * Math.sin(earthData.angle);
const planetY = sunY + earthData.dist * Math.cos(earthData.angle);
drawSpaceObject(earthData.name, earthData.color, earthData.radius, planetX, planetY);
drawOrbit(sunX, sunY, earthData.dist);




function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
