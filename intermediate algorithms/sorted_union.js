function uniteUnique(arr) {
  var newArr=[];
 for(var i = 0; i< arguments.length; i++){
   for(var x in arguments[i]){
     newArr.push(arguments[i][x]);
   }
 }
  return newArr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ){ 
      a.push(b);
    }
    return a;
  },[]
  );
}