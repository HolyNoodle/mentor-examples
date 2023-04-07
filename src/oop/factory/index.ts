import { ExerciseStep } from "../../types";
import problem from "./problem";
import solution from "./solution";
import { MediumType } from "./types";

export default {
  name: "Should return the same vehicles for the same medium",
  run: () => {
    const mediums = [MediumType.AIR, MediumType.GROUND, MediumType.WATER];

    for (const medium of mediums) {
      const problemVehicle = problem(medium);
      const solutionVehicle = solution(medium);

      console.log(
        "Vehicles should be the same for medium",
        medium,
        ":",
        problemVehicle,
        solutionVehicle
      );
    }
  },
} as ExerciseStep;
