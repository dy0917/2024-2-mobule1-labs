function sum(a, b) {
  return '' + a + b;
}

function sumv2(a, b) {
  a + b;
  return;
}

const arr = [{}];

console.log(sum(3, 4));

console.log(sumv2(3, 4));
