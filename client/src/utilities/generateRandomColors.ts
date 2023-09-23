const arrayOfObjects = [
  { color: "#00539C", backgroundColor: "#EEA47F" },
  { color: "#2F3C7E", backgroundColor: "#FBEAEB" },
  { color: "#101820", backgroundColor: "#FEE715" },
  { color: "#F96167,", backgroundColor: "#F9E795" },
  { color: "#4831D4", backgroundColor: "#CCF381" },
  { color: "#317773", backgroundColor: " #E2D1F9" },
  { color: "#990011", backgroundColor: "#FCF6F5" },
];

export function getRandomObject(objectsArray = arrayOfObjects) {
  if (!Array.isArray(objectsArray) || objectsArray.length === 0) {
    return null; // Return null if the input is not an array or if it's empty
  }

  const randomIndex = Math.floor(Math.random() * objectsArray.length);
  return objectsArray[randomIndex];
}
