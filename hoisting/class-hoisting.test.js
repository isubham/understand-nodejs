// class hoisting
describe("Class Hoisting", () => {
  test("when used before declaration throws ReferenceError", () => {

    expect(
      () => { 
        console.log('calling panda constructor'); 
        new animal('panda') }
    ).toThrow(ReferenceError); // RefereneError

    class animal {

      constructor(name) {
        this.name = name;
      }

      sayName() {
        console.log(this.name);
      }
    }
  })
})
