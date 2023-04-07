import { Car, MediumType, Plane, Ship } from "./types";

// It is not practical to do the following everywhere in your code
function getAppropriateVehicle(type: MediumType) {
  switch (type) {
    case MediumType.AIR:
      return new Plane();
    case MediumType.WATER:
      return new Ship();
    case MediumType.GROUND:
      return new Car();
  }
}

export default getAppropriateVehicle;
