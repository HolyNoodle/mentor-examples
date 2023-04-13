interface Ship {
  health: number;
  name: string;
}

const createShip = (name: string): Ship => ({
  name,
  health: 3
});

const hitShip = (ship: Ship) => {
  ship.health--;
}

function hitShips() {
  const ships = [
    createShip("1"),
    createShip("2"),
    createShip("2"),
  ];
  for (const ship of ships) {
    hitShip(ship);
  }

  return ships;
}

export default hitShips;
