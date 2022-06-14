import { drawSpaceObject } from "./drawSpaceObject.js";

export function drawStar(context, { color, name, radius, x, y, planets }) {
  drawSpaceObject(context, color, name, radius, x, y);
}
