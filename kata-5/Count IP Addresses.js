
//https://www.codewars.com/kata/526989a41034285187000de4

function ipsBetween(start, end) {
    
    start = start.split('.').map(Number);

    end = end.split('.').map(Number);

    let resultS = start[0] * 256 * 256 * 256 + start[1] * 256 * 256 + start[2] * 256 + start[3];
    let resultE = end[0] * 256 * 256 * 256 + end[1] * 256 * 256 + end[2] * 256 + end[3];

    return resultE - resultS;

}