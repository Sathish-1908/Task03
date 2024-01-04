// Sum of all numbers in array using arrow function

let SumNumber = (array) => {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(SumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
