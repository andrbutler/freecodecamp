function findLongestWord(str) {
 var arr=str.split(' ');
  var j = 0;
  for(var i= 0; i < arr.length; i++){ 
  if(arr[i].length > j){
	  j = arr[i].length;
  }
  }
  return j;
}