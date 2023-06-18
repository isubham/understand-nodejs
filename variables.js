
var i = 0;
var j = 2;

function changeI() {
    i = 222; // variable of outer scope is accessed
    var j = 22;
}

changeI();
console.log(i);
console.log(j);

