import { readInput } from "../tools/readInput";
import { getPassword } from "./getPassword";
const { log } = console;

export const day01 = {
  async part01(status: "print" | "run"): Promise<void> {
    let password = 982;
    const rawRotationDirection = await readInput("./src/day01/input.txt");
    const rotationDirection = rawRotationDirection.split("\n");

    if (status === "run") {
      password = getPassword(rotationDirection);
    }

    log("Day 01, Part 01:", password);
  },
};
