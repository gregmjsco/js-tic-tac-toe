console.log("Test");
console.log("Test again");

const gameboard = (() => {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push(Cell());
        }
      }

    const getBoard = () => board;  

    const placeToken = (row, column, player) => {
        //logic to place token
    }

    const printBoard = () => {
        //logic to print board
    }
})();