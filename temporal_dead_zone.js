

console.log(x); // undefined

var x = 1;


function accessingVariableWithoutDeclaringItWillBeUnDefined() {

  console.log(x);

  var x = 1;

}

accessingVariableWithoutDeclaringItWillBeUnDefined();
