// con las palabras reservadas var, si puedes reasignar un valor a una variable, con let y const no puedes.

var hello = "Hello";
let world = "Hello World";
const helloWorld = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

// si crear asignas un valor a una variable no existente dentro de una funcion, creas una variable var global, lo qu es una mala pracica.

helloWorld = () => {
  globalVar = "Im global";
};

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = globalVar;
  globalVar = "Im global";
};

console.log(globalVar);
