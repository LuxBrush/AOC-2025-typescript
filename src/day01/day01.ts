const { log } = console;

export const day01 = {
  async part01(status: "print" | "run"): Promise<void> {
    let password = 0;

    if (status === "run") {
      password = 0;
    }

    log("Day 01, Part 01:", password);
  },
};
