function distinct(arr) {

    return arr.filter((item, index) => arr.indexOf(item) == index);

}
console.log(distinct([1, 1, 1, 2]));


