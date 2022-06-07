

const planetName = "Earth";
const planetAssociatedStar = "Sun";
const planetDiameter = 8000;
const planetGravity = 32.2; 

const planetEarth = {
  name: "Earth",
  associatedStart: "Sun",
  diameter: 8000,
  gravity: 32.2,
};

console.log(planetEarth);

console.log(planetEarth.name);

planetEarth.gravity = 32.17;
planetEarth["gravity"] = 32.17;

const propertyToGet = "gravity";
console.log(planetEarth[propertyToGet]);

const planets = ["mercury", "venus", "earth"];
planets[1] = "VENUS";
planets[5] = "saturn";
console.log(planets);
console.log(planets[1]);
console.log(planets.length);

function showDate(name) {
  console.log("Hello " + name + " The date and Time is " +
    new Date);
}

const name = "John";

showDate(namex);

function getRadiusFromDiameter(diameter) {
  const radius = diameter / 2;
  return radius;
}

const radius = getRadiusFromDiameter(planetEarth.diameter);
console.log(radius); 