/** @format */

const canvas = document.getElementById("solar-canvas");
const context = canvas.getContext("2d", { alpha: false });
let stopUpdate;

if (!canvas) console.log("Impossible to get canvas");
if (!context) console.log("Impossible to get canvas context");

class SpaceObject {
  constructor(name, color, radius, x, y) {
    this.name = name;
    this.color = color;
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  drawName() {
    context.font = "14px monospace";
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.fillText(this.name, this.x, this.y - this.radius - 5);
  }

  draw() {
    this.drawName();

    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }
}

class Star extends SpaceObject {
  constructor(name, color, radius, x, y) {
    super(name, color, radius, x, y);
  }

  draw() {
    super.draw();
  }
}

class Planet extends SpaceObject {
  constructor(
    name,
    color,
    radius,
    dist,
    angleChangeRate,
    parent,
    rings = false
  ) {
    super(name, color, radius);
    this.dist = dist;
    this.angleChangeRate = angleChangeRate;
    this.parent = parent;
    this.x = this.parent.x + this.dist;
    this.y = this.parent.y;
    this.angle = 0;
    this.rings = rings;
  }

  update() {
    this.angle += this.angleChangeRate;
    this.x = this.parent.x + this.dist * Math.sin(this.angle);
    this.y = this.parent.y + this.dist * Math.cos(this.angle);
  }

  drawRing() {
    context.fillStyle = "#ffffff";
    context.beginPath();
    context.ellipse(
      this.x,
      this.y,
      this.radius + 5,
      1,
      Math.PI * -0.75,
      0,
      Math.PI * 2,
      true
    );
    context.closePath();
    context.fill();
  }

  drawOrbit() {
    context.beginPath();
    context.arc(this.parent.x, this.parent.y, this.dist, 0, Math.PI * 2, true);
    context.lineWidth = 0.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
  }

  draw() {
    super.draw();
    if (this.rings) this.drawRing();
    this.drawOrbit();
  }
}

class Moon extends Planet {
  constructor(name, color, radius, dist, angleChangeRate, parent) {
    super(name, color, radius, dist, angleChangeRate, parent);
  }

  update() {
    super.update();
  }

  drawRing() {
    super.drawRing();
  }

  draw() {
    super.draw();
  }
}

const sun = new Star("Sun", "yellow", 40, canvas.width / 2, canvas.height / 2);
const mercury = new Planet("Mercury", "#ffffff", 1.85, 59, 0.055, sun);
const venus = new Planet("Venus", "#de5f25", 4.85, 90, 0.022, sun);
const earth = new Planet("Earth", "blue", 5.1, 110, 0.013, sun);
const mars = new Planet("Mars", "red", 3.0, 140, 0.006, sun);
const jupiter = new Planet("Jupiter", "orange", 20.42, 220, 0.0015, sun);
const saturn = new Planet("Saturn", "#a88b6d", 17.23, 320, 0.001, sun, true);
const uranus = new Planet("Uranus", "#9fc4ca", 7.3, 400, 0.0003, sun);
const neptune = new Planet("Neptune", "#3454df", 7.07, 450, 0.0006, sun);
const moon = new Moon("Moon", "#ffffff", 1.0, 10, 0.013, earth);

const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
const stars = [sun];
const moons = [moon];

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function mainUpdate() {
  clear();

  stars.forEach(function (star) {
    star.draw();
  });

  planets.forEach(function (planet) {
    planet.update();
    planet.draw();
  });

  moons.forEach(function (moon) {
    moon.update();
    moon.draw();
  });

  stopUpdate = requestAnimationFrame(mainUpdate); // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
}

mainUpdate();
