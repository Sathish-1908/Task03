// Convert all the string to title caps in a string array using IIFE Function.

function titlecaps(str) {
  let strArray = str.toLowerCase().split(" ");
  for (i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
  }

  return strArray.join(" ");
}
console.log(titlecaps("welcome to guvi learning platform"));
