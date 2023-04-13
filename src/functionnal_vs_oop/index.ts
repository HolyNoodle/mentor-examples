import { ExerciseStep } from "../types";
import problem from "./problem";
import solution from "./solution";

export default {
  name: "Should do the exact same thing",
  run: () => {
    const problemVehicles = problem();
    const solutionVehicles = solution();

    console.log(
      "Ships should be the same:",
      problemVehicles,
      solutionVehicles
    );
  },
} as ExerciseStep;
