let bonus = 20; // jeta function er baire cal kora hoy seta global use kora jay.

function sum(first, second){
    let result = first + second + bonus//global scope akane bonus;
    //console.log(result); // kono acta jinis function er bitor declare korle oitar scope or sima takbe function er bitor. baire teke call kora jabe na.
    //console.log(bonus); // global function er ketre use hoy.

    if(result > 9){
        var mood = "happy"; // var kono acta value k oprer dike host kore reke dey
                            // const, let scope er bitore takele setake host kore na.
        console.log(mood);
    }
    //console.log(mood);
    console.log(day);
    let day = "friday";
    return result;
}

const output = sum(3, 7);

//console.log(bonus)// global scope er ketre use hobe ababe.
console.log(output);


// hosting ->kono acta scope er bitore jodi var like kono acta variable declare koro

// https://www.thatjsdude.com/jsConcepts/concepts/scope.html chai pore aste parbo ai topic aro...