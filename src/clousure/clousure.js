// esta funsion no recuerda los valores que ya le fueron asignados, por lo tengo saveCoins siempre se reinicia a 0

const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox : $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// esta operacion en cambio tiene un clousure, o sea una forma de recordar los valores que ya le habian sido asignados.

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox : $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(7);
