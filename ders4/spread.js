const arr = [1, 2, 3, 4, 5];

console.log(...arr);

const [key1, key2, ...rest] = arr;

console.log(key1);
console.log(key2);
console.log(rest);
