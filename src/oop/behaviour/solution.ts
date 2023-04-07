// This class is for sharing the Position behaviour, which is just having 2 properties: X, Y
// It allows to not replicate theses properties on all class that should have a position
class Position {
  X = 0;
  Y = 0;
}

// This is just an example here. The plant has a position. But it has not move behaviour at all
// Mind the "extends" that tells that the Plant class inherits from the Position class
class Plant extends Position {}

// This is the definition of the shared behaviour MoveForward
// In typical typed languages, this is called an Interface.
// It also extends Position because if they can move, they have a position
class MoveForward extends Position {
  moveForward() {
    throw Error("Not implemented");
    // Because in JS you can't define method without a body
  }
}


class Ship extends MoveForward {
  moveForward() {
    this.X += 3;
    this.Y += 1;
  }
}

class Car extends MoveForward {
  moveForward() {
    this.X += 1;
  }
}

class Bike extends MoveForward {
  moveForward() {
    this.X += 2;
  }
}

/*
  If you read the classes above you can still see duplication of the same behaviour with the same "twist" for each class
  This unification allows to write simpler code

  The function below does the same thing as in the problem.
*/
function moveVehicles() {
  const vehicles = [new Ship(), new Car(), new Bike()];
  for (const vehicle of vehicles) {
    vehicle.moveForward();
  }

  return vehicles;
}

export default moveVehicles;
