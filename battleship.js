class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.moveHistory = [];
    this.carrier = new Carrier([], true);
    this.battleship = new Battleship([], true);
    this.cruiser = new Cruiser([], true);
    this.submarine = new Submarine([], true);
    this.destroyer = new Destroyer([], true);
  }

}

class Ship {
  constructor(coordinates, isHorizontal) {
    this.isHorizontal = isHorizontal;
    this.coordinates = coordinates;
    this.isDestroyed = false;
  }
  takeHit(hitLocation) {
  }
}

class Carrier extends Ship {
  constructor(coordinates, isHorizontal) {
    super(coordinates, isHorizontal);
    this.length = 5;
    this.damage = [0, 0, 0, 0, 0];
  }
}

class Battleship extends Ship {
  constructor(coordinates, isHorizontal) {
    super(coordinates, isHorizontal);
    this.length = 4;
    this.damage = [0, 0, 0, 0];
  }
}

class Cruiser extends Ship {
  constructor(coordinates, isHorizontal) {
    super(coordinates, isHorizontal);
    this.length = 3;
    this.damage = [0, 0, 0];
  }
}

class Submarine extends Ship {
  constructor(coordinates, isHorizontal) {
    super(coordinates, isHorizontal);
    this.length = 3;
    this.damage = [0, 0, 0];
  }
}

class Destroyer extends Ship {
  constructor(coordinates, isHorizontal) {
    super(coordinates, isHorizontal);
    this.length = 2;
    this.damage = [0, 0, 0];
  }
}

const playerOneName = "Andy"
const playerTwoName = "HAL"

let player1 = new Player(playerOneName);
let player2 = new Player(playerTwoName);


player1.carrier.coordinates = [0, 0];

console.log(player1.playerName);
console.log(player1.carrier.coordinates);
console.log(player2.battleship.coordinates);