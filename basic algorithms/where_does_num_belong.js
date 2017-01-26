function getIndexToIns(arr, num) {
	var x = 0;
var sorted = arr.sort(function(a, b) {
  return a - b;
});
for(var i = 0; i <sorted.length; i++){
  if(num > sorted[i]){
 x += 1;}
} 
return x;
}