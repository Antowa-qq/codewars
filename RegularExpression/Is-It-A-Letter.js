String.prototype.isLetter = function () {

    return /^[a-zA-Z]{1}$/.test(this);

}

console.log('aa'.isLetter());