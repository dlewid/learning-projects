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
  constructor() {}
}

// why declare a class like this compared to class keyword?
const Card = class {
  constructor() {
    this.suit = this.get_card_suit();
    this.value = this.get_card_value();
  }

  // return suit
  get_card_suit() {
    return Math.floor(Math.random() * 4) + 1;
  }

  get_card_value() {
    return Math.floor(Math.random() * 13) + 1;
  }

  // test to see if Math.floor(Math.random() * max_value) was not a logical error
  test() {
    for (let i = 0; i < 100; i++) {
      console.log(
        "Suit: " + this.get_card_suit() + " Value: " + this.get_card_value()
      );
    }
  }

  get_suit() {
    let suits = { 1: "clubs", 2: "hearts" };
  }

  toString() {}
};

//console.log("Hello, World!") printing to console
// let is a local
// var is function scoped: when var is used in main block then it is global

let player = new Player();
consol;
