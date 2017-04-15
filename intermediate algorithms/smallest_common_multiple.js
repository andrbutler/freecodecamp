function checkDiv(num, array){
  var arr = [];
  for(var j = 0; j <= array.length-1; j++){
    arr.push(num%array[j]);
	}
  
  var flat =  arr.reduce((a, b) => a + b);
  
  if(flat === 0){
    return true;
    }
}
function smallestCommons(arr) {
  
  var newArr = [];
  arr = arr.sort(function(a,b){return a-b;});
  
  for(var i = arr[0] ;i <= arr[1]; i++){
    newArr.push(i);
  }
  
  var y = newArr.reduce((a, b) => a * b);
  
  for(var x = arr[1]; x < y; x++){
    if(checkDiv(x, newArr) === true){
    return x;
    }
  }
}
