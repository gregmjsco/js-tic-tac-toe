

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
  return {
    name,
    token
  };
};

const player1 = playerFactory('Player 1', 'X');
const player2 = playerFactory('Player 2', 'O');