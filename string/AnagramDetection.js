var isAnagram = function (test, original) {

    return [...test.toLowerCase()].sort().join('') === [...original.toLowerCase()].sort().join('');

}

console.log(isAnagram('foefet', 'toffee'));