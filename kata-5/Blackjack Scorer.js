//https://www.codewars.com/kata/534ffb35edb1241eda0015fe

function scoreHand(cards) {

    cards = cards.map(i => {
        if (i == 'J' || i == 'Q' || i == 'K') {
            return '10';
        }
        if (i == 'A') {
            return '1';
        }
        return i;
    });

    let score = 0;
    
    score = cards.reduce((p, c) => p + +c, 0);

    if (!cards.includes('1')) { return score; }

    if (cards.includes('1') && score >= 21) { return score; }

    while (score + 10 <= 21 && cards.includes('1')) {
        score += 10;
        cards[cards.indexOf('1')] = '11';
    }

    return score;
}