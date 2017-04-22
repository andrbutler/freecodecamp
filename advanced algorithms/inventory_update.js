function updateInventory(arr1, arr2) {
   for(var i = 0; i<arr2.length; i++){
     for(var x in arr1){
       if(arr1[x].includes(arr2[i][1])){
         arr1[x][0] += arr2[i][0];
       }
     }
   }
  var newArr=[];
  var sorted =[];
  for(var y in arr1){
    newArr.push(arr1[y][1]);
  }
  for(i = 0; i<arr2.length; i++){
    if(!newArr.includes(arr2[i][1])){
         arr1.push(arr2[i]);
         newArr.push(arr2[i][1]);
     }
  }
  newArr = newArr.sort();
  for(var j = 0; j< newArr.length; j++){
    for(var z in arr1){
      if(arr1[z][1] == newArr[j]){
        sorted.push(arr1[z]);
      }
    }
  }
    
    return sorted;
}
