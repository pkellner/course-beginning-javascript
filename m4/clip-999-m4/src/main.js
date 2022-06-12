import { mercuryData, venusData, earthData } from "./planetData.js";

import { drawStar } from "./drawStar.js";

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

clear();
drawStar(context, sunData);
