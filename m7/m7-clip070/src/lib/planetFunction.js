import { drawOrbit } from './drawOrbit.js';
import { drawSpaceObject } from './drawSpaceObject.js';

export const planetFunction = (
  { x: sunX, y: sunY },
  { name, color, radius, dist, angle, angleChangeRate },
  context,
) => {
  let planetX;
  let planetY;

  return {
    drawPlanet: function () {
      planetX = sunX + dist;
      planetY = sunY;
      drawSpaceObject(context, color, name, radius, planetX, planetY);
    },
    drawPlanetOrbit: function () {
      drawOrbit(context, sunX, sunY, dist);
    },
    update: function () {
    },
  };
};
