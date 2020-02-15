function fizzbuzz(n) {

    let arr = new Array(n).fill(0).map((item, index) => {
        if ((index + 1) % 15 == 0) {
            return 'FizzBuzz';
        }
        if ((index + 1) % 3 === 0) {
            return 'Fizz';
        }
        if ((index + 1) % 5 === 0) {
            return 'Buzz';
        }
        return index + 1;
    });
    return arr;
}

console.log(fizzbuzz(15));
