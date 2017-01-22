function truncateString(str, num) {
if(str.length > num){ 
  if(num <= 3){
     str = str.slice(0, num);
     str += "...";}else{
  str = str.slice(0, num -3);
  str += "...";
 
}
  }
  return str; }