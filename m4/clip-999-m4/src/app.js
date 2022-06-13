const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });
import { drawSpaceObject } from "./lib/drawSpaceObject.js";
import { drawOrbit } from "./lib/drawOrbit.js";
import { drawStar } from "./lib/drawStar.js";
import { mercuryData, venusData, earthData } from "./lib/planetData.js";

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

// const earthData = {
//   name: "Earth",
//   color: "blue",
//   radius: 5.1,
//   dist: 110,
//   angle: Math.PI / 2,
//   angleChangeRate: 0.013,
// };

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

clear(context);
drawStar(context, sunData);

// const planetX = sunPosition.x + earthData.dist * 1;
// const planetY = sunPosition.y + earthData.dist * 0;
// drawSpaceObject(
//   context,
//   earthData.color,
//   earthData.name,
//   earthData.radius,
//   planetX,
//   planetY
// );
// drawOrbit(context, sunPosition.x, sunPosition.y, earthData.dist);
