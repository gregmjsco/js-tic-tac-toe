

//Gameboard Module 
const gameboard = (() => {

  const playerFactory = (name, mark, ai, turn) => {
    return { name, mark, ai, turn};
  };

  const player1 = playerFactory('player1', 'X', false, true);
  const player2 = playerFactory('player2', 'O', false, false)

  const board = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ];

  let winner = null; 

  let turns = 0;

  
  

     // Possible win combinations
     const winCombos = [
      [0,1,2],
      [0,3,6],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [0,4,8]
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





