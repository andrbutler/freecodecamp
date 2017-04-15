function isPrime(x){
	if(x < 2){
      return false;
    }else if(x == 2){
		return true;
	}
	for(var j = 2; j<= Math.sqrt(x); j++){
		if(x % j === 0){
			return false;
		  }
		}
  return true;
}
function sumPrimes(num) {
  var arr = [];
  for(var i = 0; i <= num; i++){
	  if(isPrime(i) === true){
		  arr.push(i);
	  }
  }
  var sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}
