

//https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(number){

    let check = number.toString().split('').sort().reverse().join('');
    if (check == number) { return - 1 };

    let arr = number.toString().split('').map(Number);

    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) {
            let arr_min = arr.slice(i, arr.length).filter((item) => item > arr[i - 1]);
            let minIndex = arr.lastIndexOf(Math.min(...arr_min));
            [arr[i - 1], arr[minIndex]] = [arr[minIndex], arr[i - 1]];
            let arr_sort = arr.slice(i, arr.length).sort();
            arr.splice(i, arr_sort.length, ...arr_sort);
            break;
        }
    }
    return parseInt(arr.join(''));
}