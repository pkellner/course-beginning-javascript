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

const sunX = canvas.width / 2;
const sunY = canvas.height / 2;

let planetsData = [
  mercuryData,
  venusData,
  earthData,
  marsData,
  // jupiterData,
  // saturnData,
  // uranusData,
  // neptuneData,
];

// START WITH THIS ONE
// let maxDistShowing = 0;
// planetsData.map(function (planetData) {
//   if (maxDistShowing < planetData.dist) {
//     maxDistShowing = planetData.dist;
//   }
// });

// THEN BUILD UP TO THIS ONE BY BREAKING UP INTO SMALLER PIECES AND GETTING RID OF SLICE
// DEMO NUMBER OF PLANETS TO SHOW BY COMMENTING OUT FROM ARRAY, NOT SLICE
const maxDistShowing = Math.max(...planetsData.map((obj) => obj.dist));

// 100 represents buffer for edges, and * 2 is radius x 2
const scaleFactor = (canvas.width - 100) / (maxDistShowing * 2);

// for (let i = 0; i < maxPlanetsToShow; i++) {
//   planetsData[i].dist = planetsData[i].dist * scaleFactor;
// }

// planetsData = planetsData.map(function (planet) {
//   return {
//     ...planet,
//     dist: planet.dist * scaleFactor,
//   };
// });

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

planetsData = planetsData.map(function (planet) {
  return {
    ...planet,
    dist: planet.dist * scaleFactor,
  };
});

const planetObjects = planetsData.map(function (planetData) {
  return planet(planetData);
});

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunX,
  y: sunY,
  planets: planetObjects,
};

function drawStar({ name, color, radius, x: xStar, y: yStar, planets }) {
  drawSpaceObject(name, color, radius, xStar, yStar);

  sunData.planets.map(function (planetObject) {
    planetObject.drawOrbit();
    planetObject.drawPlanet();
    planetObject.update();
  });
}

function mainUpdate() {
  clear();
  drawStar(sunData);
  const stopUpdate = requestAnimationFrame(mainUpdate); // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

mainUpdate();
