const Game = () =>{
    const board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

    const fill = (row, col, player) =>{
        board[row][col] = player;
    }
    
    const checkWinner = () =>{
        if(board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== -1){
            return board[0][0];
        }
        if(board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== -1){
            return board[1][0];
        }
        if(board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] !== -1){
            return board[2][0];
        }
        if(board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== -1){
            return board[0][0];
        }
        if(board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] !== -1){
            return board[0][1];
        }
        if(board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] !== -1){
            return board[0][2];
        }
        if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== -1){
            return board[0][0];
        }
        if(board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[2][0] !== -1){
            return board[0][2];
        }
        return -1;
    }
    return {fill,checkWinner};
}

const start = document.getElementById('start');
const newGame = Game();