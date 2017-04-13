function fearNotLetter(str) {
  var arr = [];
  var x = 0;
  var base = str.charCodeAt(0);
  for(var i = 0; i < str.length; i++){
	  if(str.charCodeAt(i) != (base + i)){
		  arr.push(base + i);
		  x = 1;
        base = base + 1;
	  }
  }
  var fixed = String.fromCharCode(...arr);
  if(x === 0){
	  return undefined;
  }else{
	  return fixed;  
  }
}