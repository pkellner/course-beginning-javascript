const planets = ["Mercury", "Venus", "Earth"];

const a = 100;
const b = 150;
const c = 1000;
console.log((a + b) * c)

console.log(false && (true || true));

const first = "Peter";
const last = "Kellner";
console.log(first + " " + last);

let i = 101;
console.log(i === 100 ?
  console.log("i is 100") : console.log("i is not 100"));

export const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: Math.PI / 2,
  angleChangeRate: 0.013,
};

console.log("name" in earthData);