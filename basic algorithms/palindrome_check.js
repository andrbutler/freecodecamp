
function palindrome(str) {
str = str.toLowerCase();
str = str.replace((/\s+/g), '');
str = str.replace((/\W/g), '');
str = str.replace((/_/g), '');  
var comp = function(str){
	var arr = str.split('');
	var revArr = arr.reverse();
	revStr= revArr.join('');
  return revStr;
};
 //test//return (comp(str) + " " + str);
if(comp(str) == str){
return true;
}else{
return false;}
}




