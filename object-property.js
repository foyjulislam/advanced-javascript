const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Omit Hasan'},
    {id: 43, name: 'Mannaaaaa'},
    {id: 71, name: 'Deepjol'},
]

/**
const output = [];

for(let i = 0; i < students.length; i++){
    const element = students[i];
    output.push(element.name);
}
console.log(output);

*/

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);