const planets = ["Mercury", "Venus", "Earth"];

const planetFunction = (planetName,angleStart) => {
  const angleChangeRate = .001;
  let angle = angleStart;
  return {
    drawPlanet: function () {
      return angle
    },
    update: function () {
      angle = angle + angleChangeRate;
    },
  };
};

const planetFunctions = planets.map(function (pl) {
  return planetFunction(pl,0.0);
});

planetFunctions.forEach(function (pf) {
  console.log(pf.drawPlanet());
  pf.update();
})

planetFunctions.forEach(function (pf) {
  console.log(pf.drawPlanet());
  pf.update();
})

planetFunctions.forEach(function (pf) {
  console.log(pf.drawPlanet());
  pf.update();
})


// const p1  = planetFunction(180);
// const p2 = planetFunction(0);
// planets.forEach(function (planet) {
//   p1.drawPlanet();
//   p1.update();
//   p2.drawPlanet();
//   p2.update();
// });
