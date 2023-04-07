import { Car, MediumType, Plane, Ship } from "./types";

// A factory is an utility class that will hold the responsibility of manipulating the right type depending some parameter(s)
// The factory shouldn't be instantiable by design. Its' method should be static
class VehicleFactory {
  // A static method is accessible from the type directly and not from the instance of the object
  static getVehicle(type: MediumType) {
    switch (type) {
      case MediumType.AIR:
        return new Plane();
      case MediumType.WATER:
        return new Ship();
      case MediumType.GROUND:
        return new Car();
    }
  }
}

// So now, in my code I can just use the factory instead
function getAppropriateVehicle(type: MediumType) {
  // As the method getVehicle is static, we directly use the class name to access the method
  return VehicleFactory.getVehicle(type);
}

export default getAppropriateVehicle;
