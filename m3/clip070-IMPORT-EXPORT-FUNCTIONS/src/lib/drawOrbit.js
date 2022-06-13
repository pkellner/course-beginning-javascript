export function drawOrbit(context, x, y, dist) {
  context.beginPath();
  context.arc(x, y, dist, 0, Math.PI * 2, true);
  context.lineWidth = 0.5;
  context.strokeStyle = "white";
  context.stroke();
  context.closePath();
}