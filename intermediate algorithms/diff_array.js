function diffArray(arr1, arr2) {
  var newArr = [];
  var filtered2 = arr2.slice();
  var filtered1 = arr1.slice();
    for(var i = 0; i <= arr1.length; i++){
      var item = arr1[i];
    
       for(var j = filtered2.length -1; j >= 0; j--){
         if(item === filtered2[j]){
         filtered2.splice(j,1);
        }
     }
  }
  for(var l = 0; l <= arr2.length; l++){
      var item2 = arr2[l];
    
       for(var m = filtered1.length -1; m >= 0; m--){
         if(item2 === filtered1[m]){
         filtered1.splice(m,1);
        }
     }
  }
  newArr = newArr.concat(filtered2, filtered1);
  return newArr;
}
