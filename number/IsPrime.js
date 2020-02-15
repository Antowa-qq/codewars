// function isPrime(num) {
//     if (num < 2) { return false; }
//     for (let i = 2; i <= Math.ceil(Math.sqrt(num); i++) {
//         if (num % i === 0) { return false; }
//     }
//     return true;
// }

console.log(Math.sqrt(19248127631235213119999838477126));

function isPrime(num) {

    if (num < 2) {
        return false;
    }
    if (num === 2) { return true; }
    let m = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= m; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
