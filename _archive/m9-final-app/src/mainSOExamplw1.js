const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });

// const spaceObject = function ({ name, color, radius, x, y }) {
//   function drawName(xOverride, yOverride) {
//     context.font = "14px monospace";
//     context.fillStyle = "#ffffff";
//     context.textAlign = "center";
//     context.fillText(name, x, y - radius - 5);
//   }
//
//   function draw() {
//     context.beginPath();
//     context.fillStyle = color;
//     context.arc(x, y, radius, 0, Math.PI * 2, true);
//     context.fill();
//     context.closePath();
//   }
//
//   return {
//     name,
//     color,
//     radius,
//     x,
//     y,
//     draw,
//   };
// };

const spaceObject1 = function ({ name, color, radius, x, y }) {
  function drawName(xOverride, yOverride) {
    context.font = "14px monospace";
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.fillText(name, x, y - radius - 5);
  }

  function setX(x) {
    this.x = x;
  }

  function setY(y) {
    this.y = y;
  }

  function draw() {
    context.beginPath();
    context.fillStyle = color;
    context.arc(this.x, this.y, radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }

  return {
    name,
    color,
    radius,
    x,
    y,
    draw,
    setX,
    setY,
  };
};

const star = function (params) {
  const that = spaceObject1(params);
  return that;
};

const planet = function (params) {
  const that = spaceObject1(params);

  that.setX(params.parent.x + params.dist);
  that.setY(params.parent.y);

  // that.x = params.parent.x + params.dist;
  // that.y = params.parent.y;

  // when "mercury.draw()" is called below, I want this draw method to include that.x and that.y
  // at the moment, x and y are null and the below apply does not work
  //that.draw = params.draw.apply(that);

  return that;
};

const sun = star({
  name: "Sun",
  color: "yellow",
  radius: 40,
  x: canvas.width / 2,
  y: canvas.height / 2,
});

const mercury = {
  name: "Mercury",
  color: "green", // "#ffffff",
  radius: 1.85,
  dist: 59,
  parent: sun,
});

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function mainUpdate() {
  clear();
  sun.draw();
  //mercury.draw();
}

mainUpdate();
