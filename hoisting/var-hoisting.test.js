/**
 * references 
 * - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 */
describe('var hoisting', function () {
  test('return undefined if accessed before declaring', () => {
    // var x;
    console.log(x); // undefined
    x = 10;
    console.log(x); // 10
    var x;
  })
});

describe('let hoisting', function () {
  test('return ReferenceError if accessed before declaring', () => {
    // console.log(pi); // referenceError
    expect(() => {
      // let pi;
      pi = 3.14;
      console.log(pi); // 10
      let pi;
    }).toThrow(ReferenceError)
  });
});

(function () {
  console.log(dream); // referenceError
  dream = 'fly';
  console.log(dream); // 10
  let dream;
});

const name = 'subham';
{
  console.log(name); // ReferenceError
  // const name = 'sanku';
}

