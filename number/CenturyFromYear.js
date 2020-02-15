function century(year) {


    return Math.ceil(year / 100);

    //return year % 100 == 0 ? year / 100 : Math.floor(year / 100 + 1);

}

console.log(century(1901));