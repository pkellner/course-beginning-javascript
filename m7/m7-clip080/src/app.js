const canvas = document.getElementById('solar-canvas');
const context = canvas.getContext('2d', { alpha: false });
import { drawStar } from './lib/drawStar.js';
import { mercuryData, venusData, earthData, marsData, jupiterData,
  saturnData, uranusData, neptuneData
} from './lib/planetData.js';
import { planetFunction } from './lib/planetFunction.js';

const sunPosition = { x: 190, y: 150 };

const planets = [mercuryData, venusData, earthData, marsData, jupiterData,
  saturnData, uranusData, neptuneData];

const maxDistanceShowing = Math.max(
  ...planets.map(function (pl) {
    return pl.dist;
  }),
);

const scaleFactor = (canvas.width - 100) / (maxDistanceShowing * 2);

const planetsData = planets.map(function (planet) {
  return {
    ...planet,
    dist: planet.dist * scaleFactor,
    angle: Math.random() * 20,
  };
});

const planetFunctions = planetsData.map(function (planetData) {
  return planetFunction(sunPosition, planetData, context);
})

const sunData = {
  name: 'Sun',
  color: 'yellow',
  radius: 9,
  x: sunPosition.x,
  y: sunPosition.y,
  planetFunctions,
};

function clear(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

clear(context);
drawStar(context, sunData);
