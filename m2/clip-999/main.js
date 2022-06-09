const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const maxPlanetsToShow = 3;

const sunX = canvas.width / 2;
const sunY = canvas.height / 2;

const mercuryData = {
  name: "Mercury",
  color: "#ffffff",
  radius: 1.85,
  dist: 59,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.055,
};

const venusData = {
  name: "Venus",
  color: "#de5f25",
  radius: 4.85,
  dist: 90,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.022,
};

const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.013,
};

const marsData = {
  name: "Mars",
  color: "red",
  radius: 3.0,
  dist: 140,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.006,
};

const jupiterData = {
  name: "Jupiter",
  color: "orange",
  radius: 11.1,
  dist: 220,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0015,
};

const saturnData = {
  name: "Saturn",
  color: "#a88b6d",
  radius: 9.0,
  dist: 320,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.001,
};

const uranusData = {
  name: "Uranus",
  color: "#9fc4ca",
  radius: 7.3,
  dist: 400,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0003,
};

const neptuneData = {
  name: "Neptune",
  color: "#3454df",
  radius: 7.07,
  dist: 450,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0006,
};

const planetsData = [
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
];

let maxDistShowing = 0;
planetsData.slice(0, maxPlanetsToShow).map(function (planetData) {
  if (maxDistShowing < planetData.dist) {
    maxDistShowing = planetData.dist;
  }
});

// 100 represents buffer for edges, and * 2 is radius x 2
const scaleFactor = (canvas.width - 100) / (maxDistShowing * 2);
for (let i = 0; i < maxPlanetsToShow; i++) {
  planetsData[i].dist = planetsData[i].dist * scaleFactor;
}

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunX,
  y: sunY,
  planets: [
    mercuryData,
    venusData,
    earthData,
    marsData,
    jupiterData,
    saturnData,
    uranusData,
    neptuneData,
  ].slice(0, maxPlanetsToShow),
};

if (!canvas) console.log("Impossible to get canvas");
if (!context) console.log("Impossible to get canvas context");

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
  
  planets.map(function (planet) {
    const planetX = sunX + planet.dist * Math.sin(planet.angle);
    const planetY = sunY + planet.dist * Math.cos(planet.angle);
    drawSpaceObject(planet.name, planet.color, planet.radius, planetX, planetY);
    drawOrbit(sunX, sunY, planet.dist);
  });
}

clear();
debugger;
drawStar(sunData);
