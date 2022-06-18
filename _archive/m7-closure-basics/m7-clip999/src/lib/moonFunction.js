import {drawSpaceObject} from "./drawSpaceObject.js";


export const moonFunction = (
  context,
  { name, color, radius, dist, angle, angleChangeRate }
) => {
  return {
    drawMoon: function (planetX, planetY) {
      const moonX = planetX + dist * Math.sin(angle);
      const moonY = planetY + dist * Math.cos(angle);
      drawSpaceObject(context, color, name, radius, moonX, moonY);
    },
    update: function () {
      angle = angle + angleChangeRate;
    },
  };
};
