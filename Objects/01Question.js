let str = "nitin";
let freqMap = {};

for (const char of str) {
  if (freqMap[char]) {
    freqMap[char]++;
  } else {
    freqMap[char] = 1;
  }
}

console.log(freqMap); // { n: 2, i: 1, t: 1 }
