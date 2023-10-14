function Heros(name, level, emoji, attackName) {
  this.name = name;
  this.level = level;
  this.emoji = emoji;
  this.attackName = attackName;

  this.attack = function () {
    return `${this.name}, came here to save you with ${this.attackName}!`;
  };
}

const heros = [
  new Heros("Spider-Man", 10, "🕷️", "Spider web"),
  new Heros("Gambie", 7, "🂲", "Predict attack")
];
console.log(heros);
