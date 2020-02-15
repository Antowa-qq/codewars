
const currying = arr => number => arr.map(i => i * number);

console.log(currying([1, 2, 3, 4])(10));