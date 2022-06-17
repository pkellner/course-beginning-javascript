import { drawSpaceObject } from "./drawSpaceObject.js";
import { drawOrbit } from "./drawOrbit.js";

export function drawStar(context, { color, name, radius, x: xStar, y: yStar,
  planets, scaleFactor }) {
  console.log(`scaleFactor:${scaleFactor}`);
  drawSpaceObject(context, color, name, radius, xStar, yStar);
  planets.forEach(function (planet, index) {
    const isEven = index % 2 === 0;
    const planetX = xStar + (planet.dist * (isEven ? 1 : -1) * scaleFactor);
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
