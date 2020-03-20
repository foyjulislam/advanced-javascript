function add(num1, num2){
    console.log([...arguments]); // arguments kono array na but array like object.
    return num1 + num2 +arguments[2]; // extra parameter add korte chaile.
}

const result = add(2, 3, 5, 7); //jodi kono acta parameter bariye dewa hoy tahole opore console.log array declare korte hobe.
console.log(result);