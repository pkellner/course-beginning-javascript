function myFunc() {
  const planets = ["Mercury", "Venus", "Earth"];
  let abc = 101;
  return {
    logAbc: function () {
      return abc;
    },
    incrementAbc: function () {
      abc++;
    }
  }
}

const { logAbc, incrementAbc } = myFunc();

console.log(logAbc());
incrementAbc();
console.log(logAbc());
incrementAbc();
console.log(logAbc());