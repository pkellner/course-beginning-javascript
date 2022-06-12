const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

context.fillStyle = "green";
context.fillRect(10, 10, 150, 100);

const sunPosition = {
  x: 190,
  y: 150,
};

const sunData = {
  name: "Sun",
  color: "yellow",
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
};