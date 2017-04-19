function flat(arr){
  var counted = arr.reduce(function(values, val){
   if(val in values) {
     values[val]++;
   }else{
     values[val] = 1;
   }
    return values;
  },{
  });
  for(var num in counted){
    if(counted[num] > 1){
      delete counted[num];
    }
  }
  var newArr = Object.keys(counted);
  return newArr;
}

function sym(args) {
  var arr = [];
  for(var i = 0; i < arguments.length ; i++){
    var arr2 = [];
    for(var x in arguments[i]){
		if(!arr2.includes(arguments[i][x])){
		arr2.push(arguments[i][x]);
        }
       } 
    for(x in arr2){
        arr.push(arr2[x]);
      	}
        arr = flat(arr);
  }
  arr = arr.map(function(x){
    return parseInt(x, 10);
  });
  return arr;
 }