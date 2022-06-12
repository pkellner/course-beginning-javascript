import { mercuryData, venusData, earthData } from "./planetData.js";

const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const sunPosition = {
  x: 190,
  y: 150,
};
const planetsData = [mercuryData, venusData, earthData];

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planets: planetsData,
};

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

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

function drawOrbit(x, y, dist) {
  context.beginPath();
  context.arc(x, y, dist, 0, Math.PI * 2, true);
  context.lineWidth = 0.5;
  context.strokeStyle = "white";
  context.stroke();
  context.closePath();
}

function drawStar({ name, color, radius, x: xStar, y: yStar, planets }) {
  drawSpaceObject(name, color, radius, xStar, yStar);

  drawSpaceObject(
    mercuryData.name,
    mercuryData.color,
    mercuryData.radius,
    sunX + mercuryData.dist,
    sunY
  );
  drawOrbit(sunX, sunY, mercuryData.dist);

  drawSpaceObject(
    venusData.name,
    venusData.color,
    venusData.radius,
    sunX - venusData.dist,
    sunY
  );
  drawOrbit(sunX, sunY, venusData.dist);

  drawSpaceObject(
    earthData.name,
    earthData.color,
    earthData.radius,
    sunX + earthData.dist,
    sunY
  );
  drawOrbit(sunX, sunY, earthData.dist);
}

clear();
drawStar(sunData);
