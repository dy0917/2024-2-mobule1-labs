const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function sum(a, b) {
  return a + b;
}

function analyze(sentence) {
    console.log('sentence',sentence)
  const result = sentiment.analyze(sentence);
// console.log("re:",result)
  return result.score;
}

console.log("asfasdf");
// const r = sum(3, 5);
// console.log('r', r);
// console.log(sum(3, 5));
const sentence = "this is a sentence"
console.log('result:', analyze(sentence));
