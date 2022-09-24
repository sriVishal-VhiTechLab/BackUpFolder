// const listOfCards = [];      // * The Whole Card Deck. 
const randomCompCards = []; // * Random Card Deck Containing 7 Cards For Computer.
const randomPlayCards = []; // * Random Card Deck Containing 7 Cards For User.
// const cardsColors = ["Red", "Green", "Blue", "Yellow"];
// const cardsValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+2", "Skip", "Rev"];
const listOfCards = [
      "red1",
      "red2",
      "red3",
      "red4",
      "red5",
      "red6",
      "red7",
      "red8",
      "red9",
      "red0",
      "redreverse",
      "redskip",
      "redplus2",
      "blue1",
      "blue2",
      "blue3",
      "blue4",
      "blue5",
      "blue6",
      "blue7",
      "blue8",
      "blue9",
      "blue0",
      "bluereverse",
      "blueskip",
      "blueplus2",
      "green1",
      "green2",
      "green3",
      "green4",
      "green5",
      "green6",
      "green7",
      "green8",
      "green9",
      "green0",
      "greenskip",
      "greenreverse",
      "greenplus2",
      "yellow1",
      "yellow2",
      "yellow3",
      "yellow4",
      "yellow5",
      "yellow6",
      "yellow7",
      "yellow8",
      "yellow9",
      "yellow0",
      "yellowskip",
      "yellowreverse",
      "yellowplus2",
      "1red1",
      "1red2",
      "1red3",
      "1red4",
      "1red5",
      "1red6",
      "1red7",
      "1red8",
      "1red9",
      "1red0",
      "1redreverse",
      "1redskip",
      "1redplus2",
      "1blue1",
      "1blue2",
      "1blue3",
      "1blue4",
      "1blue5",
      "1blue6",
      "1blue7",
      "1blue8",
      "1blue9",
      "1blue0",
      "1bluereverse",
      "1blueskip",
      "1blueplus2",
      "1green1",
      "1green2",
      "1green3",
      "1green4",
      "1green5",
      "1green6",
      "1green7",
      "1green8",
      "1green9",
      "1green0",
      "1greenskip",
      "1greenreverse",
      "1greenplus2",
      "1yellow1",
      "1yellow2",
      "1yellow3",
      "1yellow4",
      "1yellow5",
      "1yellow6",
      "1yellow7",
      "1yellow8",
      "1yellow9",
      "1yellow0",
      "1yellowskip",
      "1yellowreverse",
      "1yellowplus2",
      "wildcard1",
      "wildcard2",
      "wildcard3",
      "wildcard4",
      "1wildcard+4",
      "2wildcard+4",
      "3wildcard+4",
      "4wildcard+4"
];
createDeck = () => {
      for (let i = 0; i < cardsColors.length; i++) {
            for (let j = 0; j < cardsValues.length; j++) {
                  let card = { Color: cardsColors[i], Value: cardsValues[j] };
                  listOfCards.push(card);
            }
      }
      return listOfCards;
}
shuffle = () => {
      for (let i = 0; i < 7; i++) {
            let machineDeckIndex = Math.floor((Math.random() * listOfCards.length));
            randomCompCards.push(listOfCards[machineDeckIndex]);
            let userDeckIndex = Math.floor((Math.random() * listOfCards.length));
            randomPlayCards.push(listOfCards[userDeckIndex]);
      }
}
renderCompDeck = (deck) => {
      document.getElementById("compDeck").innerHTML = "";
      for (let i = 0; i < deck.length; i++) {
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
renderPlayerDeck = (deck1) => {
      document.getElementById("playerDeck").innerHTML = "";
      for (let i = 0; i < deck1.length; i++) {
            let card = document.createElement("div");
            let color = document.createElement("div");
            let value = document.createElement("div");
            card.className = "card " + deck1[i].Color;
            value.className = "value";
            value.innerHTML = deck1[i].Value;
            card.appendChild(value);
            card.appendChild(color);
            document.getElementById("playerDeck").appendChild(card);
      }
}
createDeck();
shuffle(listOfCards);
renderPlayerDeck(randomPlayCards);
renderCompDeck(randomCompCards);

