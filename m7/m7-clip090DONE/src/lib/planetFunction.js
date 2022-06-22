import { drawOrbit } from './drawOrbit.js';
import { drawSpaceObject } from './drawSpaceObject.js';
import { moonFunction } from './moonFunction.js';
export const planetFunction = (
  { x: sunX, y: sunY },
  { name, color, radius, dist, angle, angleChangeRate, moonDataList },
  context,
) => {
  let moonFunctions = moonDataList ?
    moonDataList.map(function (moonData) {
      return moonFunction(moonData, context);
    }) : [];
  console.log(moonFunctions);
  return {
    drawPlanet: function () {
      const planetX = sunX + dist * Math.sin(angle);
      const planetY = sunY + dist * Math.cos(angle);
      debugger;
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
