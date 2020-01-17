//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {

    while (parens.includes('()')) {
        parens = parens.replace('()', '');
    }

    return parens.length == 0 ? true : false;
    
}