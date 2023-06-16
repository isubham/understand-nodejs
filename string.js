// strings
let myInitial = 's';
console.log(typeof myInitial);

let myName = 'subham kumar';
console.log(typeof myName);

// strings and numbers

// NOTE :- addition is the only exception
console.log('11' + 2 == 112) // 112
console.log(2 + '11' == 211) // 211
console.log('2' + '11' == 211) // 211
console.log('2' + '11' + 2 == 2112) // 211

console.log('11' - 2 == 9) // 9
console.log(11 - '2' == 9) // 9

console.log(2 * '11' == 22) // 22
console.log('11' * 2 == 22) // 22

console.log('11' / 2 == 5.5)
console.log(11 / '2' == 5.5)

console.log(11 + '2' + '2' == 1122)

console.log(11 + '2' - '2' == 110)

console.log('5' - '2' == 3)
