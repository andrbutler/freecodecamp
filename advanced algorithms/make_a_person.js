var Person = function(firstAndLast) {
    
    this.getFirstName = function(){
      return (firstAndLast.split(' ')[0]);
    };
    this.getLastName = function(){
      return (firstAndLast.split(' ')[1]);
    };
    this.getFullName = function(){
      return (firstAndLast);
    };
    this.setFirstName = function(first){
    firstAndLast = first + ' ' + firstAndLast.split(' ')[1];
    };
    this.setLastName = function(last){
    firstAndLast = firstAndLast.split(' ')[0] + ' ' + last ;
    };
    this.setFullName = function(firstAndLast){
    this.setFirstName(firstAndLast.split(' ')[0]);
    this.setLastName(firstAndLast.split(' ')[1]);
    };
    this.setFullName(firstAndLast);
};