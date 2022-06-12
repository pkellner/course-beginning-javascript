import { drawSpaceObject } from "./utils.js";

export const moon = (
 context, { name, color, radius, dist, angle, angleChangeRate }
) => {
  return {
    drawMoon: function (planetX, planetY) {
      const moonX = planetX + dist * Math.sin(angle);
      const moonY = planetY + dist * Math.cos(angle);
      drawSpaceObject(context,  name, color, radius, moonX, moonY);
    },
    update: function () {
      angle = angle + angleChangeRate;
    },
  };
};
