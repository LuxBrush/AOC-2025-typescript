const { log } = console;
export function getPassword(rotationInstructions: string[]): number {
  let startingPoint = 50;
  let counter = 0;
  for (const instruction of rotationInstructions) {
    const match = instruction.match(/([LR])(\d+)/);
    if (match !== null) {
      const [_, direction, distance] = match as [string, "L" | "R", string];
      startingPoint = rotateDial(direction, startingPoint, distance);
    }
    if (startingPoint === 0) {
      counter++;
    }
  }
  return counter;
}

function rotateDial(direction: "L" | "R", inputNumber: number, distance: string): number {
  const distanceInt = parseInt(distance);
  if (direction === "L") {
    if (inputNumber - distanceInt < 0) {
      const remainder = Math.abs(inputNumber - distanceInt);
      inputNumber = 100;
      inputNumber -= remainder;
      inputNumber = inputNumber % 100
    } else {
      inputNumber -= distanceInt;
      inputNumber = inputNumber % 100
    }
  } else {
    if (inputNumber + distanceInt > 99) {
      const remainder = inputNumber + distanceInt - 100;
      inputNumber = 0;
      inputNumber += remainder;
      inputNumber = inputNumber % 100
    } else {
      inputNumber += distanceInt;
      inputNumber = inputNumber % 100
    }
  }
  return inputNumber;
}
