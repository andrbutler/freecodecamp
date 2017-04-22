var newArr =[];
function permut(str) {
    if (str.length < 2) return str;

    var permutations = [];

    for (var i=0; i<str.length; i++) {
        var char = str[i];
        var remainingStr = str.slice(0,i) + str.slice(i+1,str.length); 
        for (var subPermutation of permut(remainingStr)){
            permutations.push(char + subPermutation);
		}
    }
    return permutations;
}

function gen(str){
var arr = [];
arr.push(permut(str));

for(var i=0; i < arr[0].length; i++){
newArr.push(arr[0][i]);
}
}
function permAlone(str){
var result = [];
gen(str);
for(var x in newArr){
if(!/(.)(?=.)*\1/.test(newArr[x])){
result.push(newArr[x]);
}
}
console.log(result.length + ' ' + result);
return result.length;
}
