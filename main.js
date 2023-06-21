

//Gameboard Module 
const gameboard = (() => {
    const board = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
    ];

    const getBoard = () => {
      console.log(board);
    };

    const placeToken = (value, playerToken) => {
        //logic to place token
        board[value] = placeToken;
    };

    return {getBoard, placeToken};
})();

const gameController = (() => {

})();


const playerFactory = (name, token) => {
  

}