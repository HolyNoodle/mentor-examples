import { ExerciseStep } from "./types";

import behaviour from "./oop/behaviour";
import factory from "./oop/factory";
import func_vs_oop from "./functionnal_vs_oop";

const steps = [behaviour, factory, func_vs_oop] as ExerciseStep[];

for (const step of steps) {1
  console.log("");
  console.log("---------------");
  console.log(step.name);
  console.log("---------------");

  step.run();
}
