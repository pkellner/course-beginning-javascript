const planets = ["Mercury", "Venus", "Earth"];

planets.push("Mars");

for (const planet of planets) {
  console.log(planet);
}

planets[1] = "venus";
console.log(planets.indexOf("Earth"));

planets.pop();
planets.splice(1, 1);
planets.shift();


console.log(planets);