function convertToRoman(num) {
 var string = num.toString();
 var arr = [];
 var  converted= '';
 for(var i = string.length -1; i >= 0; i--){
	 arr.push(parseInt(string[i]));
 }
 //ones place
if (arr[0]){
	if (arr[0] <= 3){
		for(i = 0; i< arr[0]; i++){
		converted = 'I' + converted;
		}
	}else if(arr[0] == 4){
	converted = 'IV' + converted;
	}else if(arr[0] < 9){
		for(i = 5; i< arr[0]; i++){
		converted = 'I' + converted;
		}
	converted = 'V' + converted;
	}else if(arr[0] == 9){
	converted = 'IX' + converted;
	}
}
// tens place
if (arr[1]){
	if (arr[1] <= 3){
		for(i = 0; i< arr[1]; i++){
		converted = 'X' + converted;
		}
	}else if(arr[1] == 4){
  converted = 'XL' + converted;
	}else if(arr[1] < 9){
		for(i = 5; i< arr[1]; i++){
		converted = 'X' + converted;
		}
	converted = 'L' + converted;
	}else if(arr[1] == 9){
	converted = 'XC' + converted;
	}
}
// hundreds place
if (arr[2]){
	if (arr[2] <= 3){
		for(i = 0; i< arr[2]; i++){
		converted = 'C' + converted;
		}
	}else if(arr[2] == 4){
	converted = 'CD' + converted;
	}else if(arr[2] < 9){
		for(i = 5; i< arr[2]; i++){
		converted = 'C' + converted;
		}
	converted = 'D' + converted;
	}else if(arr[2] == 9){
	converted = 'CM' + converted;
	}
}
//thousands place
if (arr[3]){
	for(i = 0; i< arr[3]; i++){
	converted = 'M' + converted;
	}
}
return converted;
}
