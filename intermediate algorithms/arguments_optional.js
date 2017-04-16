
function addTogether(x) {  
  for(var i = 0; i< arguments.length; i++){
    if(typeof arguments[i] != 'number' || Array.isArray(arguments[i])){
      return undefined;
    } 
  }
  if(arguments[1]){
  return arguments[0] + arguments[1];
 }
 return function(y){
   for(var i = 0; i< arguments.length; i++){
    if(typeof arguments[i] != 'number' || Array.isArray(arguments[i])){
      return undefined;
    } 
  }
 return x+y;
};
}