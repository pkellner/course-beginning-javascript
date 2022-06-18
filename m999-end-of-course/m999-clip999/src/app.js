import { planetFunction } from "./lib/planetFunction.js";

const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });
import { drawStar } from "./lib/drawStar.js";
import {
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
} from "./lib/planetData.js";

const sunPosition = {
  x: 190,
  y: 150,
};

const planets = [
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
];

// THEN BUILD UP TO THIS ONE BY BREAKING UP INTO SMALLER PIECES AND GETTING RID OF SLICE
// DEMO NUMBER OF PLANETS TO SHOW BY COMMENTING OUT FROM ARRAY, NOT SLICE
//const maxDistShowing = Math.max(...planetsData.map((obj) => obj.dist));

let maxDistanceShowing = 0;
planets.forEach(function (planetData) {
  if (maxDistanceShowing < planetData.dist) {
    maxDistanceShowing = planetData.dist;
  }
});

const scaleFactor = (canvas.width - 100) / (maxDistanceShowing * 2);

const planetsData = planets.map(function (planet) {
  return {
    ...planet,
    dist: planet.dist * scaleFactor,
  };
});

const planetFunctions = planetsData.map(function (planetData) {
  return planetFunction(sunPosition, planetData, context);
});

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planetFunctions,
  scaleFactor,
};

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function mainUpdate() {
  clear(context);
  drawStar(context, sunData);
  const stopUpdate = requestAnimationFrame(mainUpdate); // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

mainUpdate();
