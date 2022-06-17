const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });
import { drawStar } from "./lib/drawStar.js";
import {
  mercuryData, venusData, earthData,
  marsData, jupiterData, saturnData, uranusData, neptuneData
}
  from "./lib/planetData.js";

const sunPosition = {
  x: 190,
  y: 150,
};

const planets = [mercuryData, venusData, earthData,
  marsData, jupiterData, saturnData, uranusData, neptuneData];

// START WITH THIS ONE
// let maxDistShowing = 0;
// planetsData.map(function (planetData) {
//   if (maxDistShowing < planetData.dist) {
//     maxDistShowing = planetData.dist;
//   }
// });

// THEN BUILD UP TO THIS ONE BY BREAKING UP INTO SMALLER PIECES AND GETTING RID OF SLICE
// DEMO NUMBER OF PLANETS TO SHOW BY COMMENTING OUT FROM ARRAY, NOT SLICE
const maxDistShowing = Math.max(...planets.map((obj) => obj.dist));

// 100 represents buffer for edges, and * 2 is radius x 2
const scaleFactor = (canvas.width - 100) / (maxDistShowing * 2);


const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planets,
  scaleFactor,
};

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

clear(context);
drawStar(context, sunData);
