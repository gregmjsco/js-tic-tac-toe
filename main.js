

//Gameboard Module 
const gameboard = (() => {
    const rows = 3;
    const columns = 3;
    const board = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
    ];

    //for (let i = 0; i < rows; i++) {
     //   board[i] = [];
       /// for (let j = 0; j < columns; j++) {
         // board[i].push(Cell());
        //}
      //}

    const getBoard = () => {
      console.log(board);
    };

    const placeToken = (row, column, player) => {
        //logic to place token
        board[row][column] = player;
    };

    const printBoard = () => {
        //logic to print board
    };
    return {getBoard, placeToken, printBoard};
})();


function Cell(){
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

const gameController = (() => {

})();


const playerFactory = (name, token) => {

}