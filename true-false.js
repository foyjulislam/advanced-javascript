// falsy value
// false
// 0 
// ""
//undefined
// null
// NaN

// Truthy value
// '0'
// " "
//[]
// {} object empty property takle o true
//'false'


// 0 value bade jekono value +- value takle o true hobe.
//const age = 0; //condition is false

/**
const age = -4;  // condition is true
if(age > 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
 */
// for string 
// const name ="0"; // condition is true because string er modde 0 takle o seta true 
// const name =""; // condition is false
// const name =" "; // condition is true because whitespace is value for javascript
/** 
const name = "solaiman khan";  // condition is true
if(name.length){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

*/

let name;  // value na takle seti undefined ortat false dore nibe
let name = null; // null set korle o value hisabe seta k o false dorbe

console.log(name);

if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
