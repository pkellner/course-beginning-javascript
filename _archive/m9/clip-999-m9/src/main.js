import { planet } from "./planet.js";

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
import { drawStar } from "./drawStar.js";

const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const sunPosition = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

let planetsData = [
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
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

planetsData = planetsData.map(function (planet) {
  return {
    ...planet,
    dist: planet.dist * scaleFactor,
  };
});

const planetObjects = planetsData.map(function (planetData) {
  return planet(sunPosition, planetData, context);
});

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planets: planetObjects,
};

function mainUpdate() {
  clear();
  drawStar(context, sunData);
  const stopUpdate = requestAnimationFrame(mainUpdate); // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

mainUpdate();
