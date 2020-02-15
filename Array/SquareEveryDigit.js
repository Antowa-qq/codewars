function squareDigits(num) {

    return +[...num.toString()].map(item => item * item).join('');
}

console.log(squareDigits(9119));