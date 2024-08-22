function roll(max) {
  return Math.floor(Math.random() * max) + 1;
}

function chooseDice(dice) {
  if (dice == 'd6') {
    console.log(roll(6));
  } else {
    console.log(roll(10));
  }
}


console.log('1' == 1);
console.log('1' === 1);
