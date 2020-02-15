function positiveSum(arr) {

    if (arr.length === 0) { return 0 };
    return arr.reduce((p, c) => c > 0 ? p + c : 0);

}

console.log(positiveSum([-1, -1, -1, 1]));