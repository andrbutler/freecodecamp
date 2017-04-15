function dropElements(arr, func) {
  // Drop them elements.
 var newArr = arr.slice();
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i]) === false){
      newArr.shift();
    }else if (func(arr[i]) === true){
      return newArr;
    }
  }
  return newArr;
  
}