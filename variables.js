
var i = 0;
var j = 2;

function changeJ() {
    i = 222; // variable of outer scope is accessed
    var j = 22;
}

changeJ();
console.log(i);
console.log(j);

