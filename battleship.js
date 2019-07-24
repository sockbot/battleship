class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.moveHistory = [];
  }
}

class Ship {
  constructor(coordinates) {
    this.isHorizontal = true;
    this.coordinates = coordinates;
    this.isDestroyed = false;
  }
  takeHit(hitLocation) {
  }
}

class Carrier extends Ship {
  constructor() {
    super(coordinates);
    this.length = 5;
    this.damage = [0, 0, 0, 0, 0];
  }
}

class Battleship extends Ship {
  constructor() {
    super(coordinates);
    this.length = 4;
    this.damage = [0, 0, 0, 0];
  }
}

class Cruiser extends Ship {
  constructor() {
    super(coordinates);
    this.length = 3;
    this.damage = [0, 0, 0];
  }
}

class Submarine extends Ship {
  constructor() {
    super(coordinates);
    this.length = 3;
    this.damage = [0, 0, 0];
  }
}

class Destroyer extends Ship {
  constructor() {
    super(coordinates);
    this.length = 2;
    this.damage = [0, 0, 0];
  }
}