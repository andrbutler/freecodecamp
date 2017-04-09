
function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKey = Object.keys(source);
  var sourceVal = Object.values(source);
  for(var x in collection){
    for(var i = 0; i < sourceKey.length; i++){
      if ((collection[x].hasOwnProperty(sourceKey[i]) && collection[x][sourceKey[i]] != (sourceVal[i])) || (!collection[x].hasOwnProperty(sourceKey[i]))){
		delete collection[x];
  }
   }
        }
  for (var y in collection){
    if(collection[y] !== null){
      arr.push(collection[y]);
    }
  }
  return arr;
} 