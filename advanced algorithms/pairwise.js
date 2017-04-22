function pairwise(arr, arg) {
  var newArr =[];
  var last=[];
  for(var i=0; i<arr.length;i++){
    for(var x in arr){
    if(arr[i]+arr[x] == arg && !newArr.includes(i) && !newArr.includes(x) && i != x){
      newArr.push(i);
      newArr.push(x);
    }
    }
  }
  for(var y in newArr){
    if(typeof newArr[y] != 'string'){
      last.push(newArr[y]);
    }
  }
  var result = last.reduce((a, b) => a + b, 0);
  return result;
}