// A los clousures les podemos agregar metodos para asignar o quitar ciertos valores. De esta forma retornamos una variable privada.

const person = () => {
  var saveName = "Name";
  return {
    getname: () => {
      return saveName;
    },
    setname: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getname());
newPerson.setname("Eduardo");
console.log(newPerson.getname());
