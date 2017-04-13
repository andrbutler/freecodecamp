function styleSpacedFormat(propertyName) {
  function toSpaced(match, offset, string) {
    return (offset ? ' ' : '') + match;
  }
  return propertyName.replace(/[A-Z]/g, toSpaced);
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 
  str = styleSpacedFormat(str);
  str = str.replace(/(\s+)|(_)/g, '-');
  str= str.replace(/-+/g, '-');
  str = str.toLowerCase();
  return str;
}
