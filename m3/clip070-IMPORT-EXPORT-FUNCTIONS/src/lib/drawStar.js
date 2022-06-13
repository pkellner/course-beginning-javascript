import { drawSpaceObject } from "./drawSpaceObject.js";

export function drawStar(context, { color, name, radius, x, y }) {
  drawSpaceObject(context, color, name, radius, x, y);
}