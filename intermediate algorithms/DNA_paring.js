function pairElement(str) {
 var newArr = str.split('');
 for(var i = 0; i <= newArr.length; i++){
	 switch(newArr[i]){
		 case 'A':
		 newArr[i] = (['A','T']);
		 break;
		 
		 case 'G':
		 newArr[i] = (['G','C']);
		 break;
		 
		 case 'C':
		 newArr[i] = (['C','G']);
		 break;

		 case 'T':
		  newArr[i] = (['T','A']);
		 break;
		 }
 }
 return newArr;
}