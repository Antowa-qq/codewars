//https://www.codewars.com/kata/5324945e2ece5e1f32000370/javascript

function sumStrings(a, b) {


    a = a.split('').map(Number).reverse();
    b = b.split('').map(Number).reverse();

    if (a.length > b.length) { [a, b] = [b, a] };

    for (let i = 0; i < a.length; i++) {
        if (a[i] + b[i] > 9) {
            if (i + 1 == b.length) { b.push(0) };
            b[i + 1] += 1;
            b[i] = a[i] + b[i] - 10;
        }
        else {
            b[i] = a[i] + b[i];
        }
    }

    if (b[b.length - 1] == 0) { b.pop() };

    return b.reverse().join('');
}
