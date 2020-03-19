const numbers = [2, 3, 5, 6, 9];
const output = [];

/** for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
*/
//console.log(output);

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;
// map er bitor a 3ta peramitar nite pare jemon (element, index, array)
/**numbers.map(function(element, index, array){
    console.log(element, index, array);
})
*/

// const result = numbers.map(function(element){
//     return element * element;
// })
// const result = numbers.map(x => x * x);
// console.log(result);


//filter

const bigger = numbers.filter(x => x > 5);
//console.log(bigger);

// find (filter er arekti part)

const isThere = numbers.find( x => x > 5);
console.log(isThere);

//map & filter array diye dibe . find sodo Element dibe.