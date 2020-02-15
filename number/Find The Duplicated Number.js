function findDup(arr) {

    return arr.filter((element, index) => index != arr.lastIndexOf(element))[0];

}


console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));