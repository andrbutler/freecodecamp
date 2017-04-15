function binaryAgent(str) {
  var arr = str.split(' ');
  var newStr = '';
  for(var i = 0; i< arr.length; i++){
    arr[i] = parseInt(arr[i], 2);
    arr[i] = String.fromCharCode(arr[i]);
    newStr = newStr + arr[i];
  }

  return newStr;
}