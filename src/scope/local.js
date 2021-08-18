const helloWorld = () => {
  const hello = "hello world";
  // hello solo existe dentro de esta funcion
  console.log(hello);
};

helloWorld();

// este console.log no puede acceder a la variable hello
console.log(hello);

var scope = " i am global";

const functionScope = () => {
  var scope = "i am a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();

console.log(scope);
