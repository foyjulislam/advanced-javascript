function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

// closure hosse kono acta function teke jodi aro acta function k cal kori otoba return kori taile se acta close environment toiri kore fele & nijera acta external reference toiri kore fele take closure bole.