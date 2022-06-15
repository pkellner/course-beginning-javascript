import {
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
} from "./planetData.js";

const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const sunX = 190;
const sunY = 150;

let planetsData = [
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
];

planetsData = planetsData.map(function (planet) {
  return {
    ...planet,
    dist: planet.dist * scaleFactor,
  };
});

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunX,
  y: sunY,
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

  planets.map(function (planet, index) {
    //const isEven = index % 2 === 0 ? true : false;
    const isEven = index % 2 === 0;

    //const planetX = sunX + planet.dist * isEven ? 1 : -1; // precedence problem
    const planetX = sunX + planet.dist * (isEven ? 1 : -1); // Math.sin(earthData.angle);
    const planetY = sunY + planet.dist * 0; // Math.cos(earthData.angle);
    drawSpaceObject(planet.name, planet.color, planet.radius, planetX, planetY);
    drawOrbit(sunX, sunY, planet.dist);
  });
}

clear();
drawStar(sunData);
