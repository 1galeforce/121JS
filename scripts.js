//G. Erie HW 5 Robo Dealer Due Feb. 9, 2025
  // Define a Card class with 'value' and 'suit' properties (Class)
  class Card {
    constructor(value, suit) { // Constructor
      this.value = value;
      this.suit = suit;
    }
  }

  // Generate a deck of 52 unique cards with assigned numbers to Face Cards and Ace (Object Iteration)
  const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // Jack = 11, Queen = 12, King = 13, Ace = 14
  let deck = [];

  // Programmatically create the deck of 52 cards with all unique cards in a deck
  for (let suit of suits) {
    for (let value of values) {
      deck.push(new Card(value, suit));
    }
  }

  // Function to get the name of a card-display the name of face cards, NOT the assigned numeric value (Built-in Objects: Array and String template literals)
  const getCardName = (card) => {
    let valueName;
    switch (card.value) {
      case 11:
        valueName = 'Jack';
        break;
      case 12:
        valueName = 'Queen';
        break;
      case 13:
        valueName = 'King';
        break;
      case 14:
        valueName = 'Ace';
        break;
      default:
        valueName = card.value;
    }
    return `${valueName} of ${card.suit}`;
  }

  // Function to deal a hand of 5 cards
  const dealHand = () => {
    // Clear the currently-displayed hand
    $("#card_hand").html('');

    // Select 5 random cards from the deck (Built-in Objects: Math)
    let hand = [];
    for (let i = 0; i < 5; i++) {
      let cardIndex = Math.floor(Math.random() * deck.length); // Use Math.random() to select a card
      hand.push(deck[cardIndex]);
      deck.splice(cardIndex, 1); // Remove the selected card from the deck to avoid reuse
    }

    // Display the hand
    let handHTML = '';
    for (let card of hand) {
      handHTML += `<p>${getCardName(card)}</p>`;
    }

    // Update 'card_hand' DIV with appropriate information
    $("#card_hand").html(handHTML);

    return false; // Prevent page reload
  }