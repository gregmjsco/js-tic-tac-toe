console.log("Test");
console.log("Test again");


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

    const getBoard = () => board;  

    const placeToken = (row, column, player) => {
        //logic to place token
    }

    const printBoard = () => {
        //logic to print board
    }
})();


const displayController = (() => {

})();


const playerFactory = (name, token) => {

}