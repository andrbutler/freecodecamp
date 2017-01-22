function reverseString(str) {
	var arr = str.split('');
	var revArr = arr.reverse();
	str= revArr.join('');
  return str;
}