function rot13(str) {
	var newStr = "";
  for(var i = 0; i <= str.length-1; i++){
	  var num = str.charCodeAt(i);
	     if(num >= 78 && num <= 90){
		  num -= 13;
		 newStr += String.fromCharCode(num);
		 num = 0;
		 }else if(num >= 65 && num <= 78){
		 num += 13;
		 newStr += String.fromCharCode(num);
		 num = 0;
		 }else{
			 newStr += str[i];
			 num = 0;
		 }
  }
  return newStr;
}
// alphabet in unicode(caps){A=65 - Z=90}
//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
