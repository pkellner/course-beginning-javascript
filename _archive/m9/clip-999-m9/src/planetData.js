const mercuryData = {
  name: "Mercury",
  color: "#ffffff",
  radius: 1.85,
  dist: 59,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.055,
};

const venusData = {
  name: "Venus",
  color: "#de5f25",
  radius: 4.85,
  dist: 90,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.022,
};

const earthData = {
  name: "Earth",
  color: "blue",
  radius: 5.1,
  dist: 110,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.013,
  moonDataList: [
    {
      name: " ",
      color: "white",
      radius: 1.0,
      dist: 10,
      angle: 0.0,
      angleChangeRate: 0.013 * 12, // moon orbits earch 27.322 times faster then earth orbits sun
    },
  ],
};

const marsData = {
  name: "Mars",
  color: "red",
  radius: 3.0,
  dist: 140,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.006,
  moonDataList: [
    {
      name: "",
      color: "white",
      radius: 1.0,
      dist: 5,
      angle: 0.0,
      angleChangeRate: 0.006 * 30, // moon orbits earch 27.322 times faster then earth orbits sun
    },
    {
      name: "",
      color: "white",
      radius: 1.0,
      dist: 9,
      angle: 0.0,
      angleChangeRate: 0.006 * 45, // moon orbits earch 27.322 times faster then earth orbits sun
    },
  ],
};

const jupiterData = {
  name: "Jupiter",
  color: "orange",
  radius: 11.1,
  dist: 220,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0015,
};

const saturnData = {
  name: "Saturn",
  color: "#a88b6d",
  radius: 9.0,
  dist: 320,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.001,
};

const uranusData = {
  name: "Uranus",
  color: "#9fc4ca",
  radius: 7.3,
  dist: 400,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0003,
};

const neptuneData = {
  name: "Neptune",
  color: "#3454df",
  radius: 7.07,
  dist: 450,
  angle: Math.random() * 20.0,
  angleChangeRate: 0.0006,
};

export {
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
};
