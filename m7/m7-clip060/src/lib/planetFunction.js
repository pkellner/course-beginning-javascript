import { drawOrbit } from "./drawOrbit.js";
import { drawSpaceObject } from "./drawSpaceObject.js";

export function planetFunction({ x: sunX, y: sunY },
  {name, color, radius, dist, angle, angleChangeRate }, context) {
  return {
    drawPlanet: function () {
      const planetX = sunX + dist;
      const planetY = sunY;
      drawSpaceObject(
        context,
        color,
        name,
        radius,
        planetX,
        planetY,
      );
    },
    drawPlanetOrbit: function () {
      drawOrbit(context, sunX, sunY, dist);
    },
    update: function () {
      
    },
  };
}
