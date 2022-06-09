const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

const sunX = canvas.width / 2;
const sunY = canvas.height / 2;

const planet = ({
  name,
  color,
  radius,
  dist,
  angle,
  angleChangeRate,
  sunX,
  sunY,
}) => {
  return {
    drawPlanet: function () {
      let x = sunX + dist * Math.sin(angle);
      let y = sunY + dist * Math.cos(angle);
      drawSpaceObject(name, color, radius, x, y);
    },
    drawOrbit: function () {
      drawOrbit(sunX,sunY,dist);
    },
    update: function () {
      angle = angle + angleChangeRate;
    },
  };
};

const mercury = planet({
  name: "Mercury",
  color: "#ffffff",
  radius: 1.85,
  dist: 59,
  angle: 0.0,
  angleChangeRate: 0.055,
  sunX,
  sunY,
});

const venus = planet({
  name: "Venus",
  color: "#de5f25",
  radius: 4.85,
  dist: 90,
  angle: 0.0,
  angleChangeRate: 0.022,
  sunX,
  sunY,
});

const earth = planet({
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: 0.0,
  angleChangeRate: 0.013,
  sunX,
  sunY,
});

const mars = planet({
  name: "Mars",
  color: "red",
  radius: 3.0,
  dist: 140,
  angle: 0.0,
  angleChangeRate: 0.006,
  sunX,
  sunY,
});

const jupiter = planet({
  name: "Jupiter",
  color: "orange",
  radius: 20.42,
  dist: 220,
  angle: 0.0,
  angleChangeRate: 0.0015,
  sunX,
  sunY,
});

const saturn = planet({
  name: "Saturn",
  color: "#a88b6d",
  radius: 17.23,
  dist: 320,
  angle: 0.0,
  angleChangeRate: 0.001,
  sunX,
  sunY,
});

const uranus = planet({
  name: "Uranus",
  color: "#9fc4ca",
  radius: 7.3,
  dist: 400,
  angle: 0.0,
  angleChangeRate: 0.0003,
  sunX,
  sunY,
});

const neptune = planet({
  name: "Neptune",
  color: "#3454df",
  radius: 7.07,
  dist: 450,
  angle: 1.0,
  angleChangeRate: 0.0006,
  sunX,
  sunY,
});

const sun = {
  name: "Sun",
  color: "yellow",
  radius: 25,
  x: sunX,
  y: sunY,
  planets: [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune],
};

let stopUpdate;

if (!canvas) console.log("Impossible to get canvas");
if (!context) console.log("Impossible to get canvas context");

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSpaceObject(name, color, radius, x, y) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  context.font = "14px monospace";
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.fillText(name, x, y - radius - 5);
}

function drawOrbit(x, y, dist) {
  context.beginPath();
  context.arc(x, y, dist, 0, Math.PI * 2, true);
  context.lineWidth = 0.5;
  context.strokeStyle = "white";
  context.stroke();
  context.closePath();
}

function drawStar({ name, color, radius, x: xStar, y: yStar, planets }) {
  drawSpaceObject(name, color, radius, xStar, yStar);

  planets.map(function (xxx) {
    xxx.drawOrbit();
    xxx.drawPlanet();
    xxx.update();
  });
}

function mainUpdate() {
  clear();
  drawStar(sun);

  stopUpdate = requestAnimationFrame(mainUpdate); // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

mainUpdate();
