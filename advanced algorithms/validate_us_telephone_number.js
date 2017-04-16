function telephoneCheck(str) { 

 if(/[(](\d\d\d[)])/.test(str)){
  str = str.replace(/[()]/g, '');
 }
  
 if(isNaN(str[0])){
    return false;
 }
  
 str = str.replace(/\s+|[-]/g, '');
  
 if((str.length == 11 && str[0] != 1) || str.length > 11 || str.length < 10){
    return false;
 }
  
 for(var i = 0; i < str.length -1; i++){
    if(isNaN(str[i])){
      return false;
    }
 }
  
 return true;
}
