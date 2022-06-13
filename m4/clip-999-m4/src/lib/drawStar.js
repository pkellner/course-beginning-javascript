import { drawSpaceObject } from "./drawSpaceObject.js";
import { drawOrbit } from "./drawOrbit.js";

export function drawStar(
  context,
  { color, name, radius, x: xStar, y: yStar, planets }
) {
  drawSpaceObject(context, color, name, radius, xStar, yStar);

  for (const planetData of planets) {
    let distanceFromSun = xStar + planetData.dist;
    if (planetData.name === "Venus") {
      distanceFromSun = xStar - planetData.dist;
    }
    drawSpaceObject(
      context,
      planetData.color,
      planetData.name,
      planetData.radius,
      distanceFromSun,
      yStar
    );
    drawOrbit(context, xStar, yStar, planetData.dist);
  }
}
