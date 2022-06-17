const planets = ["Mercury", "Venus", "Earth"];

const newPlanets = planets.map(function (planet, index, originalArray) {
  if (planet === "Earth") {
    return "EARTH " + index;
  } else {
    return planet;
  }
});
console.log(newPlanets);

/*
function outputPlanet(planet) {
  console.log(planet);
}
planets.forEach(outputPlanet);


let i = 0;
do {
  console.log(planets[i]);
  i++;
} while (i < planets.length);


while (i < planets.length) {
  if (i === 1) {
    i++;
    continue;
  }
  console.log(planets[i]);
  i++;
}
*/