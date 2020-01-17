
//https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0

function whoIsNext(name, n) {


    let i = name.length;
    let resultRight = name.length;

    while (resultRight < n) {
        i += i;
        resultRight += i;
    }

    let resultLeft = resultRight - i;

    let step = (resultRight - resultLeft) / name.length;

    let index = 0;

    let result = resultLeft;

    while (true) {

        if (result >= n) {
            break;
        }

        else {
            result += step;
            index++;
        }

    }
    return name[index - 1];
}
