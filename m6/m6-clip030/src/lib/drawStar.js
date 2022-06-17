import { drawSpaceObject } from "./drawSpaceObject.js";
import { drawOrbit } from "./drawOrbit.js";

export function drawStar(context, { color, name, radius, x: xStar, y: yStar,
  planets }) {
  drawSpaceObject(context, color, name, radius, xStar, yStar);
  const scaleFactor = .32;
  planets.forEach(function (planet) {
    const planetX = xStar + (planet.dist * 1 * scaleFactor);
    const planetY = yStar + (planet.dist * 0 * scaleFactor);
    drawSpaceObject(
      context,
      planet.color,
      planet.name,
      planet.radius,
      planetX,
      planetY
    );
    drawOrbit(context, xStar, yStar, planet.dist * scaleFactor)
  });
}
