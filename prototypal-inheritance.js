
/**
 * 
Prototype inheritance in JS
===========================

every object has __proto__ property and that 
can be used to share attributes between the objects

__proto__ 


 */

let apple = {
    name: "apple",
    price: "20",
    __proto__: {
        size: 10
    }
}

apple.__proto__.age = 10;

// apple.prototype.price = '30';

console.log("apple.__proto__", apple.__proto__);
console.log("apple.size", apple.size);
console.log("apple", apple);


