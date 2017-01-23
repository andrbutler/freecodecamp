function slasher(arr, howMany) {
   var newArr = arr;
  for( var i = 0; i < howMany; i++){
	   newArr.shift();
   }
  return newArr;
}