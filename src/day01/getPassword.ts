export function getPassword(rotationInstructions: string[]): number {
  let position = 50;
  let zeroCount = 0;

  for (const instruction of rotationInstructions) {
    const { direction, distance } = parseInstruction(instruction);
    position = rotateDial(direction, position, distance);
    if (position === 0) zeroCount++;
  }

  return zeroCount;
}

function rotateDial(direction: "L" | "R", current: number, distance: number): number {
  const delta = direction === "L" ? -distance : distance;
  return (current + delta) % 100;
}

function parseInstruction(instruction: string): { direction: "L" | "R"; distance: number } {
  const match = instruction.match(/([LR])(\d+)/);
  if (!match) {
    throw new Error(`Invalid instruction format: "${instruction}"`);
  }
  const [_, direction, distanceString] = match;
  return {
    direction: direction as "L" | "R",
    distance: parseInt(distanceString),
  };
}
