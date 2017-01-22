function confirmEnding(str, target) {
  var n= target.length;
  if(str.substring(str.length -n) == target){
	  return true;
  }
return false;
}