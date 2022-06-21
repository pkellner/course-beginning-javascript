import { drawOrbit } from './drawOrbit.js';
import { drawSpaceObject } from './drawSpaceObject.js';
import { moonFunction } from './moonFunction.js';
export const planetFunction = (
  { x: sunX, y: sunY },
  { name, color, radius, dist, angle, angleChangeRate, moonDataList },
  context,
) => {
  let moonFunctions = [];
  if (moonDataList) {
    moonDataList.map(function (moonData) {
      moonFunctions.push(moonFunction(moonData, context));
    });
  }
  return {
    drawPlanet: function () {
      const planetX = sunX + dist * Math.sin(angle);
      const planetY = sunY + dist * Math.cos(angle);
      drawSpaceObject(context, color, name, radius, planetX, planetY);
      moonFunctions.forEach(function (moonFunction) {
        moonFunction.drawMoon(planetX, planetY);
      })
      },
    drawPlanetOrbit: function () {
      drawOrbit(context, sunX, sunY, dist);
    },
    update: function () {
      angle = angle + angleChangeRate;
      moonFunctions.forEach(function (moonFunction) {
        moonFunction.update();
      })
    },
  };
};
