function translatePigLatin(str) {
  if(str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u'){
    str = str + 'way';
  }else{
   str = str.replace(/(\w+?)([aeiou]\w+)/, '$2$1') + 'ay';
  }
  return str;
}