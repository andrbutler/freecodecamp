function sumAll(arr) {
 var min = Math.min(...arr);
 var max = Math.max(...arr);
 var result = 0;
 for(min; min <= max; min++){
	 result = result + min;
 }
 return result;
}

