//https://www.codewars.com/kata/513e08acc600c94f01000001

function rgbToHex(rgb) {

    if (rgb >= 255) { return 'FF' };

    if (rgb < 0) { return '00' };

    let hex = rgb.toString(16);

    if (hex.length < 2) {
        hex = '0' + hex;
    }
    
    return hex;
}
function rgb(r, g, b) {

    r = rgbToHex(r);

    g = rgbToHex(g);

    b = rgbToHex(b);

    return (r + g + b).toUpperCase();
}