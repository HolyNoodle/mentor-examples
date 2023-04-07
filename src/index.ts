import { ExerciseStep } from "./types";

import behaviour from "./oop/behaviour";
import factory from "./oop/factory";

const steps = [behaviour, factory] as ExerciseStep[];

for (const step of steps) {1
  console.log("");
  console.log("---------------");
  console.log(step.name);
  console.log("---------------");

  step.run();
}
