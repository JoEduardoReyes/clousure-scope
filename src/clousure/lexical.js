const billCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = billCount(1);

myCount();
myCount();
myCount();

const otherCount = billCount(10);

otherCount();
otherCount();