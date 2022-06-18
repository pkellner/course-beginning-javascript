import { drawOrbit, drawSpaceObject } from "./utils.js";

export const planet = (
  { x: sunX, y: sunY },
  { name, color, radius, dist, angle, angleChangeRate },
  context
) => {
  let planetX;
  let planetY;

  return {
    drawPlanet: function () {
      planetX = sunX + dist * Math.sin(angle);
      planetY = sunY + dist * Math.cos(angle);
      drawSpaceObject(context, name, color, radius, planetX, planetY);
    },
    drawPlanetOrbit: function () {
      drawOrbit(context, sunX, sunY, dist);
    },
    update: function () {
      angle = angle + angleChangeRate;
    },
  };
};
