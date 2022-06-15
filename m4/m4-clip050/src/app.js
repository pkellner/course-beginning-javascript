const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });
import { drawStar } from "./lib/drawStar.js";
import { mercuryData, venusData, earthData } from "./lib/planetData.js";

const sunPosition = {
  x: 190,
  y: 150,
};

const planets = [mercuryData, venusData, earthData];
const planetsData = [...planets,{
  name: "Mars",
  color: "red",
  radius: 3.0,
  dist: 140,
  angle: 0,
  angleChangeRate: 0.006,
}];

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planets: planetsData,
};

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

clear(context);
drawStar(context, sunData);