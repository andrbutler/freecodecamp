function sumFibs(num) {
 if(num <= 1){
   return num;
 }else{
  var arr = [1,1];
  var newArr = [];
  for(var i = 2; i < num; i++){
	  arr[i] = (arr[i-2] + arr[i-1]);
  }
  for(var j = 0; j < num; j++){
  if(arr[j]%2 !== 0 && arr[j] <= num){
	  newArr.push(arr[j]);
  }
  }
  var sum = newArr.reduce((a, b) => a + b, 0);
 return sum;
} 
}