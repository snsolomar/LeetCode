//iterator function
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

// countToTen();

//recursive function
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};

recurToTen();
