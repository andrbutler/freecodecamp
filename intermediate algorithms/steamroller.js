function steamrollArray(arr) { 
  var newArr = [];
  var repeat = false;
  for(var i = 0; i < arr.length; i++){
	  if(Array.isArray(arr[i])){
		  for(var x in arr[i]){
			  newArr.push(arr[i][x]);
		  }
		 repeat = true; 
	  }else{
		  newArr.push(arr[i]);
	  }
  }
  if(repeat === false){
	  return newArr; 
  } 
	 return steamrollArray(newArr); 
}