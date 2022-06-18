const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const maxPlanetsToShow = 8;

const sunX = canvas.width / 2;
const sunY = canvas.height / 2;

const mercuryData = {
  name: "Mercury",
  color: "#ffffff",
  radius: 1.85,
  dist: 59,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.055,
  moonDataList: [],
};

const venusData = {
  name: "Venus",
  color: "#de5f25",
  radius: 4.85,
  dist: 90,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.022,
  moonDataList: [],
};

const earthStartAngle = Math.random() * 20.0;
const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: earthStartAngle,
  angleChangeRate: 0.013,
  moonDataList: [
    {
      name: " ",
      color: "white",
      radius: 1.0,
      dist: 10,
      angle: earthStartAngle,
      angleChangeRate: 0.013 * 12, // moon orbits earch 27.322 times faster then earth orbits sun
    },
  ],
};

// mars orbit 687 days
//
const marsStartAngle = Math.random() * 20.0;
const marsData = {
  name: "Mars",
  color: "red",
  radius: 3.0,
  dist: 140,
  angle: marsStartAngle,
  angleChangeRate: 0.006,
  moonDataList: [
    {
      name: "",
      color: "white",
      radius: 1.0,
      dist: 5,
      angle: marsStartAngle,
      angleChangeRate: 0.006 * 30, // moon orbits earch 27.322 times faster then earth orbits sun
    },
    {
      name: "",
      color: "white",
      radius: 1.0,
      dist: 9,
      angle: marsStartAngle,
      angleChangeRate: 0.006 * 45, // moon orbits earch 27.322 times faster then earth orbits sun
    },
  ],
};

const jupiterData = {
  name: "Jupiter",
  color: "orange",
  radius: 11.1,
  dist: 220,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0015,
  moonDataList: [],
};

const saturnData = {
  name: "Saturn",
  color: "#a88b6d",
  radius: 9.0,
  dist: 320,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.001,
  moonDataList: [],
};

const uranusData = {
  name: "Uranus",
  color: "#9fc4ca",
  radius: 7.3,
  dist: 400,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0003,
  moonDataList: [],
};

const neptuneData = {
  name: "Neptune",
  color: "#3454df",
  radius: 7.07,
  dist: 450,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0006,
  moonDataList: [],
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
const speedFactor = 0.1;
for (let i = 0; i < maxPlanetsToShow; i++) {
  planetsData[i].dist = planetsData[i].dist * scaleFactor;
  planetsData[i].angleChangeRate = planetsData[i].angleChangeRate * speedFactor;
  for (let j = 0; j < planetsData[i].moonDataList.length; j++) {
    planetsData[i].moonDataList[j].angleChangeRate =
      planetsData[i].moonDataList[j].angleChangeRate * speedFactor;
  }
}

const moon = ({ name, color, radius, dist, angle, angleChangeRate }) => {
  return {
    drawMoon: function (planetX, planetY) {
      const moonX = planetX + dist * Math.sin(angle);
      const moonY = planetY + dist * Math.cos(angle);
      drawSpaceObject(name, color, radius, moonX, moonY);
    },
    update: function () {
      angle = angle + angleChangeRate;
    },
  };
};

const planet = ({
  name,
  color,
  radius,
  dist,
  angle,
  angleChangeRate,
  moonDataList,
}) => {
  let planetX;
  let planetY;
  let moons = [];
  if (moonDataList) {
    moonDataList.map(function (moonData) {
      moons.push(moon(moonData));
    });
  }

  return {
    drawPlanet: function () {
      planetX = sunX + dist * Math.sin(angle);
      planetY = sunY + dist * Math.cos(angle);
      drawSpaceObject(name, color, radius, planetX, planetY);
      moons.map(function (moon) {
        moon.drawMoon(planetX, planetY);
      });
    },
    drawOrbit: function () {
      drawOrbit(sunX, sunY, dist);
    },
    update: function () {
      angle = angle + angleChangeRate;
      moons.map(function (moon) {
        moon.update();
      });
    },
  };
};

const mercury = planet(mercuryData);
const venus = planet(venusData);
const earth = planet(earthData);
const mars = planet(marsData);
const jupiter = planet(jupiterData);
const saturn = planet(saturnData);
const uranus = planet(uranusData);
const neptune = planet(neptuneData);

const sunData = {
  name: "",
  color: "yellow",
  radius: 9,
  x: sunX,
  y: sunY,
  planets: [
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  ].slice(0, maxPlanetsToShow),
};

let stopUpdate;

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
    planet.drawOrbit();
    planet.drawPlanet();
    planet.update();
  });
}

function mainUpdate() {
  clear();
  drawStar(sunData);

  stopUpdate = requestAnimationFrame(mainUpdate); // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

mainUpdate();
