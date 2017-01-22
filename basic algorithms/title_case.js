function titleCase(str) {
	str = str.toLowerCase();
  var arr = str.split(' ');
  var newArr =[];
	for(var i = 0; i < arr.length; i++){
		var wordArr = arr[i];
        var sepWord = wordArr.split('');
        var first = sepWord.shift();
        var cap = first.toUpperCase();
        sepWord.unshift(cap);
        var word= sepWord.join('');
        newArr.push(word);
	}
  str= newArr.join(' ');
  return str;
}
