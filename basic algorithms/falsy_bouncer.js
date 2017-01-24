function bouncer(arr) {
  function  isFalse (val){
   var x = Boolean(val);
    if (x === true){return true;}
    return false;
  }
 var newArr = arr.filter(isFalse);
  return newArr;
}