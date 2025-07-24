//Created by Daulton Widlacki. Create a command line poker game to brush up on JS.

// TO-DO:
/* 
- Create a class for player, ops, deck.
- Create main function loop
*/

// This is a class declaration in JS ```class ClassName```
class Player {
  constructor(starting_dough) {
    // instance variables assignment using keyword this
    this.player_name = "Player 1";
    this.cash = starting_dough;
    this.hand = [new Card(), new Card()];
  }

  // Creating a magic method... no need for function keyword
  toString() {
    return "Name: " + this.player_name + "\nCash: " + this.cash;
  }
}

class Op {
  constructor() {}
}

class Deck {
  constructor() {}
}

class River {
  constructor() {
    // This uses fill and map to fill an array with new Card() obj
    // using fill with new Card() as items filling results in a refrence to the same card obj
    // using map without fill will not work because array has a length but no actual values
    // ... map expects to map to something in side the array
    this.pool = new Array(5).fill(null).map(() => new Card());
    this.revealed_cards = [];
  }

  reveal_card() {
    this.revealed_cards.push(this.pool[this.revealed_cards.length]);
  }
}

// why declare a class like this compared to class keyword?
const Card = class {
  constructor() {
    this.suit = this.#generate_card_suit();
    this.value = this.#generate_card_value();
  }

  // return suit
  #generate_card_suit() {
    return Math.floor(Math.random() * 4) + 1;
  }

  #generate_card_value() {
    return Math.floor(Math.random() * 13) + 1;
  }

  // test to see if Math.floor(Math.random() * max_value) was not a logical error
  test() {
    for (let i = 0; i < 100; i++) {
      console.log(
        "Suit: " +
          this.generate_card_suit() +
          " Value: " +
          this.generate_card_value()
      );
    }
  }

  // The # denotes a private method or attribute
  #get_suit() {
    let suits = { 1: "clubs", 2: "hearts", 3: "diamonds", 4: "spades" };
    return suits[this.suit];
  }

  #get_value() {
    let values = {
      1: "ace",
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: "jack",
      12: "queen",
      13: "King",
    };

    return values[this.value];
  }

  toString() {
    return this.#get_value() + " of " + this.#get_suit();
  }
};

//console.log("Hello, World!") printing to console
// let is a local
// var is function scoped: when var is used in main block then it is global

let test = new River();
console.log(test);
console.log(test.revealed_cards);
test.reveal_card();
test.reveal_card();
test.reveal_card();
test.reveal_card();
console.log(test.revealed_cards);
