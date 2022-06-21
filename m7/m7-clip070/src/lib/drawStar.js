import { drawSpaceObject } from './drawSpaceObject.js';
import { drawOrbit } from './drawOrbit.js';

export function drawStar(
  context,
  { color, name, radius, x: xStar, y: yStar, planetFunctions },
) {
  drawSpaceObject(context, color, name, radius, xStar, yStar);
  planetFunctions.forEach(function (planetFunction) {
    planetFunction.drawPlanet();
    planetFunction.drawPlanetOrbit();
    planetFunction.update();
  });
}
