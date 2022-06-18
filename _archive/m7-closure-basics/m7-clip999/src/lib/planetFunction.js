import {drawOrbit} from "./drawOrbit.js";
import {drawSpaceObject} from "./drawSpaceObject.js";
import {moonFunction} from "./moonFunction.js";


export const planetFunction = (
  { x: sunX, y: sunY },
  { name, color, radius, dist, angle, angleChangeRate, moonDataList },
  context
) => {
  let planetX;
  let planetY;
  
  let moons = [];
  
  if (moonDataList) {
    moonDataList.map(function (moonData) {
      moons.push(moonFunction(context, moonData));
    });
  }
  
  return {
    drawPlanet: function () {
      planetX = sunX + dist * Math.sin(angle);
      planetY = sunY + dist * Math.cos(angle);
      
      drawSpaceObject(context, color, name, radius, planetX, planetY);
      moons.map(function (moon) {
        moon.drawMoon(planetX, planetY);
      });
    },
    drawPlanetOrbit: function () {
      drawOrbit(context, sunX, sunY, dist);
    },
    drawMoon: function (planetX, planetY) {
      const moonX = planetX + dist * Math.sin(angle);
      const moonY = planetY + dist * Math.cos(angle);
      drawSpaceObject(context, color, name, radius, moonX, moonY);
    },
    update: function () {
      angle = angle + angleChangeRate;
      moons.map(function (moon) {
        moon.update();
      });
    },
  };
};
