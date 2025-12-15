import { readInput } from "../tools/readInput";
import { getPassword } from "./getPassword";
const { log } = console;

export const day01 = {
  async part01(status: Status): Promise<void> {
    let password = 982;
    const rawRotationDirection = await readInput("./src/day01/input.txt");
    const rotationDirection = rawRotationDirection.split("\n");

    if (status === "run") {
      password = getPassword(rotationDirection);
    }

    log("Day 01, Part 01:", password);
  },
  async part02(status: Status) {
    let password = 0;

    const rawRotationDirection = await readInput("./src/day01/demoPart01.txt");
    const rotationDirection = rawRotationDirection.split("\n");

    if (status === "run") {
      password = 1;
    }

    log("Day 01, Part 02:", password);
  },
};
