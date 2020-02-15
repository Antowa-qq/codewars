function isPalindrome(line) {

    return line.toString() === [...line.toString()].reverse().join('');
    
}

console.log(isPalindrome(123321));