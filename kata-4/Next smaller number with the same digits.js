
//https://www.codewars.com/kata/5659c6d896bc135c4c00021e/javascript

function nextSmaller(n) {

    let arr = String(n).split('').map(Number);

    for (let i = arr.length - 1; i > 0; i--) {

        let temp_arr = [];

        if (arr[i] < arr[i - 1]) {

            temp_arr = arr.splice(i, arr.length - 1);

            let swap_number_index = temp_arr.indexOf(Math.max(...temp_arr.filter(item => arr[i - 1] > item)));

            [temp_arr[swap_number_index], arr[i - 1]] = [arr[i - 1], temp_arr[swap_number_index]];

            arr = arr.concat(temp_arr.sort((a, b) => { return b - a }));

            break;
        }
    }
    
    return arr[0] == 0 || +arr.join('') == n ? -1 : +arr.join('');
}
