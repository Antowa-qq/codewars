function count(string) {

    let result = {}

    string.split('').forEach(item => {
        result[item] === undefined ? result[item] = 1 : result[item] = result[item] + 1;
    });

    return result;

}
console.log(count(''));