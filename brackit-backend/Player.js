class Player {

  constructor(name) {
    this.name = name;
    this.roundScore = 0;
    this.totalScore = 0;
    this.opponent = 0;
    this.isLeader = true;
  }
}

module.exports = Player;