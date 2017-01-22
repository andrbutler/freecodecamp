function factorialize(num) {
	var factorNum = num;
     if(num === 0){
        factorNum = 1;
      }else{
	for(var i = 1; i < num; i++){
      
	factorNum *= i;	}
      }
	num = factorNum;
  return num;
}