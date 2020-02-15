String.prototype.vowel = function () {


    return /^[aeiou]{1}$/i.test(this); // ===   return /^[aeiouAEIOU]{1}$/.test(this);


};

console.log('A'.vowel());