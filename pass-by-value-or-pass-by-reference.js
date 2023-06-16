
function dontChangePrimitiveTypes(pi) {
    pi = 3.44;
    return pi;
}

function doesNotChangeObjectItself(pi) {
    pi = 3.44;
    return pi;
}

let PI = 3.14;
dontChangePrimitiveTypes(pi);
console.log(pi);

let pi = { value: 3.14 };
// NOTE : object if entirely assigned dont change, so object properties are pass by reference by object itself is pass by value
doesNotChangeObjectItself(pi)
console.log(pi)
