class Ship {
  health = 3;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public hit() {
    this.health--;
  }
}

function hitShips() {
  const ships = [new Ship("1"), new Ship("2"), new Ship("3")];
  for (const ship of ships) {
    ship.hit();
  }

  return ships;
};


export default hitShips;