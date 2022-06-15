const planets = ["Mercury", "Venus", "Earth"];

for (let i = 0; i < planets.length; i++) {
  console.log(planets[i]);
}

for (const planet of planets) {
  console.log(planet);
}

const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: Math.PI / 2,
  angleChangeRate: 0.013,
};

for (const property in earthData) {
  console.log(property, earthData[property]);
}