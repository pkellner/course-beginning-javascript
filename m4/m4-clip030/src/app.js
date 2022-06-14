const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });
import { drawStar } from "./lib/drawStar.js";
import { mercuryData, venusData, earthData } from "./lib/planetData.js";

const sunPosition = {
  x: 190,
  y: 150,
};

const planets = [mercuryData, venusData, earthData];

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planets,
};

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

clear(context);
drawStar(context, sunData);
