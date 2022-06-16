const planets = ["Mercury", "Venus", "Earth"];

let i = 0;
while (i < planets.length) {
  if (i === 1) {
    i++;
    continue;
  }
  console.log(planets[i]);
  i++;
}

