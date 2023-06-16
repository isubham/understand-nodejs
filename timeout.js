
const timeout = setTimeout(() => {
    console.log('timeout');
}, 0);

console.log(timeout);
console.log(typeof timeout);

clearTimeout(timeout);

let consoleReturn = console.log('hello');
if (consoleReturn) {
    console.log('world');
}

