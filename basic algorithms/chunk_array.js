
function chunkArrayInGroups(arr, size) {
var newArr= [];
  var num = arr.length/size;
for(var i =0; i<num; i++){
	var chunk = arr.slice(0, size);
   for( var j = 0; j < size; j++){
	   arr.shift();
   }
  newArr.push(chunk);
  
  }
  return newArr;
}

