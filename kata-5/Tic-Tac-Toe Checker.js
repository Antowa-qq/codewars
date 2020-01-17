//https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {

    let my_board = [];
    board.forEach( item => {
        return item.forEach( item =>  {
            return my_board.push(item);
        })
    });


    let winner = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
    let winner_play;

    let result = winner.some( (item) =>  {
        winner_play = my_board[item[0]];
        return my_board[item[0]] == my_board[item[1]] && my_board[item[1]] == my_board[item[2]];
    });

    console.log(result);

    let empty_board = board.some((item)  => {
        return item.includes(0);
    });



    if (winner_play && result) { return winner_play == 1 ? 1 : 2 };
    if (empty_board) { return -1 };
    if (!result) { return 0 };
}