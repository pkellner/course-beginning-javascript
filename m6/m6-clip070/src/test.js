const planets = ["Mercury", "Venus", "Earth"];

const animalType = "Beagle";

if (animalType === "Poodle" || animalType === "Beagle") {
  console.log("This is a dog");
} else if (animalType === "Siamese") {
  console.log("This is a cat");
} else {
  console.log("This is not a dog or a cat");
}

switch (animalType) {
  case "Beagle":
  case "Poodle":
    console.log("This is a dog");
    break;
  case "Siamese":
    console.log("This is a cat");
    break;
  default:
    console.log("This is not a dog or a cat");
}