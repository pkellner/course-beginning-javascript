function addIncrementToAngle(startingValue, incrementValue) {
  var angle = startingValue;
  function incrementAngle() {
    angle = angle + incrementValue;
    return angle;
  }
  return incrementAngle;
}

var myFunc = addIncrementToAngle(3.0, 0.0001);

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
