// Functionnal way
// Pure typescript: We define the structure of the object, optional but make the code clearer and easier to work with
interface Ship {
  health: number;
  name: string;
}

// Equivalent of the constructor in OOP. This is an object creator (not official term)
const createShip = (name: string): Ship => ({
  name,
  health: 3
});

// Function that belongs to an object are defined on there own and don't use this. They instead expect a parameter
const hitShip = (ship: Ship) => {
  ship.health--;
}

function hitShips() {
  const ships = [
    createShip("1"),
    createShip("2"),
    createShip("3"),
  ];
  for (const ship of ships) {
    hitShip(ship);
  }

  return ships;
}

export default hitShips;
