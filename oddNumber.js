// print odd numbers in array using anonymous function

let oddNumbers = function (array) {
  temp = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      temp.push(array[i]);
    }
  }
  return temp;
};

console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
