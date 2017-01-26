
function destroyer(arr) {
   var newArr =[]; 
  var filtered =[];
    for(var i =1; i < arguments.length; i++){
       newArr.push(arguments[i]);
      }
	 for(var j = 0; j < arr.length; j++){
      if (newArr.indexOf(arr[j]) === -1){
       filtered.push(arr[j]);
 
     }
  }

  return filtered;}