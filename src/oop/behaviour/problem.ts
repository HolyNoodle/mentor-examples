class Ship {
  X = 0;
  Y = 0;

  public goForward() {
    this.X += 3;
    this.Y += 1;
  }
}

class Car {
  X = 0;
  Y = 0;

  public forward() {
    this.X += 1;
  }
}

class Bike {
  X = 0;
  Y = 0;

  public moveForward() {
    this.X += 2;
  }
}

/*
  If you read the classes above you can see duplication of the same behaviour but with a "twist" for each class
  They all allow to move forward in a way but it does not impact them the same way.

  This difference is a problem especially when we want to "move forward" all ships, cars and bikes we have for example.

  The function below does this. It has an array of ships, cars and bikes.
  Adding new types will force us to change this function to handle the new type.
*/
function moveVehicles() {
  const vehicles = [new Ship(), new Car(), new Bike()] as any;
  for (const vehicle of vehicles) {
    if (vehicle.goForward !== undefined) {
      vehicle.goForward();
    }
    if (vehicle.forward !== undefined) {
      vehicle.forward();
    }
    if (vehicle.moveForward !== undefined) {
      vehicle.moveForward();
    }
  }

  return vehicles;
};


export default moveVehicles;