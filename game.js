function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const cards = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'];
console.log(cards);
shuffle(cards);
console.log(cards);

function compareCards(indexA, indexB) {
  if (cards[indexA] == cards[indexB]) {
    cards[indexA] = undefined;
    cards[indexB] = undefined;
      console.log('match', cards);
      if (cards.filter(c => c != undefined).length == 0) { 
          console.log('you won')
      }
  } else {
    console.log('not match');
  }
}
