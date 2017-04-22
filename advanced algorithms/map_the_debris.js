function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i = 0; i< arr.length; i++){
  var rad = arr[i].avgAlt + earthRadius;
  var rad3 = Math.pow(rad, 3);
  var div = rad3/GM;
  var sqrt = Math.sqrt(div);
  arr[i].orbitalPeriod = Math.round(2*Math.PI*sqrt);
  delete arr[i].avgAlt;
  }
  return arr;
}