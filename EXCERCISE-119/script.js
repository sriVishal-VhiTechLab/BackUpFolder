const listOfCards = [];  // * The Whole Card Deck.                                                                                                                                                                           
const randomCompCards = []; // * Random Card Deck Containing 7 Cards For Computer.
const randomPlayCards = []; // * Random Card Deck Containing 7 Cards For User.
const cardsColors = ["Red", "Green", "Blue", "Yellow"];
const cardsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+2", "+4", "Skip", "Rev"];
createDeck = () => {
      for (let i = 0; i < cardsColors.length; i++) {
            for (let j = 0; j < cardsValues.length; j++) {
                  let card = { Color: cardsColors[i], Value: cardsValues[j] };
                  listOfCards.push(card);

            }

      }
      console.log(listOfCards);
      return listOfCards;
}
shuffle = () => {
      for (let i = 0; i < 8; i++) {
            let location1 = Math.floor((Math.random() * listOfCards.length));
            randomCompCards.push(listOfCards[location1]);
            let location2 = Math.floor((Math.random() * listOfCards.length));
            randomPlayCards.push(listOfCards[location2]);
      }
}
renderCompDeck = (deck) => {
      console.log(deck);
      document.getElementById("compDeck").innerHTML = "";
      for (let i = 0; i <= deck.length; i++) {
            let card = document.createElement("div");
            let color = document.createElement("div");
            let value = document.createElement("div");
            card.className = "card "+deck[i].Color;
            value.className = "value";
            value.innerHTML = deck[i].Value;
            card.appendChild(value);
            card.appendChild(color);
            document.getElementById("compDeck").appendChild(card);
      }
}
renderPlayerDeck = (deck) => {
      document.getElementById("playerDeck").innerHTML = "";
      for (let i = 0; i <= deck.length; i++) {
            console.log(deck[i].Color);
            let card = document.createElement("div");
            let color = document.createElement("div");
            let value = document.createElement("div");
            card.className = "card " + deck[i].Color;
            value.className = "value";
            value.innerHTML = deck[i].Value;
            card.appendChild(value);
            card.appendChild(color);
            document.getElementById("compDeck").appendChild(card);
      }
}
createDeck();
shuffle(listOfCards);
renderCompDeck(randomCompCards);
renderPlayerDeck(randomPlayCards);
