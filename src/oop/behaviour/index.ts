import { ExerciseStep } from "../../types";
import problem from "./problem";
import solution from "./solution";

export default {
  name: "Should share the same behaviour",
  run: () => {
    const problemVehicles = problem();
    const solutionVehicles = solution();

    console.log(
      "Vehicles should be the same:",
      problemVehicles,
      solutionVehicles
    );
  },
} as ExerciseStep;
