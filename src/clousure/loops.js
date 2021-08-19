// al usar var creamos de forma involuntaria un clousure que no cumple lo que queremos.

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
