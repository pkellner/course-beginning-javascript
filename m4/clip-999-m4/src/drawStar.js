import { drawOrbit, drawSpaceObject } from "./utils.js";
import { earthData, mercuryData, venusData } from "./planetData.js";

export function drawStar(context, { name, color, radius, x: xStar, y: yStar }) {
  drawSpaceObject(context, name, color, radius, xStar, yStar);

  drawSpaceObject(
    context,
    mercuryData.name,
    mercuryData.color,
    mercuryData.radius,
    xStar + mercuryData.dist,
    yStar
  );
  drawOrbit(context, xStar, yStar, mercuryData.dist);

  drawSpaceObject(
    context,
    venusData.name,
    venusData.color,
    venusData.radius,
    xStar - venusData.dist,
    yStar
  );
  drawOrbit(context, xStar, yStar, venusData.dist);

  drawSpaceObject(
    context,
    earthData.name,
    earthData.color,
    earthData.radius,
    xStar + earthData.dist,
    yStar
  );
  drawOrbit(context, xStar, yStar, earthData.dist);
}
