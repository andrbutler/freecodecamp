function mutation(arr) {
	var first = arr[0];
	var second = arr[1];
	first = first.toLowerCase();
	second = second.toLowerCase();
    for(var i=0; i <= second.length; i++){
     if(first.indexOf(second.charAt(i)) === -1){
      return false;
     }
    }
	return true;
}

