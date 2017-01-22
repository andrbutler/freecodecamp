function largestOfArr(arr) {
	var newArr=[];
	var num = 0;
 for(var i = 0; i < arr.length; i++){
	 for(var j =0; j < arr[i].length; j++){
		 if(arr[i][j] > num){
			 num = arr[i][j];
		 }
		  }
   newArr.push(num);
   num = 0;
 }
  return newArr;
}