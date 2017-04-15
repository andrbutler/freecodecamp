function findElement(arr, func) {
  newArr = arr.filter(func);
  return newArr[0];
}