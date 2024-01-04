//Print odd numbers in array using arrow function

let oddNumber = (array) => {
  temp = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      temp.push(array[i]);
    }
  }
  return temp;
};

console.log(oddNumber([1, 2, 3, 4, 5, 6, 7, 8]));
