import { drawSpaceObject } from "./utils.js";

export function drawStar(
  context,
  { name, color, radius, x: xStar, y: yStar, planets }
) {
  drawSpaceObject(context, name, color, radius, xStar, yStar);

  planets.map(function (planetObject) {
    planetObject.drawPlanetOrbit();
    planetObject.drawPlanet();
    planetObject.update();
  });
}
