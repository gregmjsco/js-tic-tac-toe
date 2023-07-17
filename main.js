const gameBoard = (() => {

  let board = [];

  for (i = 0; i < 9; i++){
    board.push('');
  }

  let checkCell = cellToCheck => {
    if (board[cellToCheck] == '') {
      return true;
    } else {
      return false;
    }
  }; 

  return {
    board
  };

})();



const playerFactory = (name, marker) => {

  placeMarker = cell => {
    cell = marker; 
    return marker;
  };

  return {
    name, marker, placeMarker
  };
};

const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard.board;

  console.log(board[1]);
  console.log(board);
  let activePlayer = player1;
  let winnerDeclared = false;
  let remainingSpots = 9; 

  const takeTurn = () => {
    let cell = prompt("Choose cell", 0);

    board[cell] = activePlayer.marker;
    console.log(board)
    remainingSpots--; 
  }
  
  if(remainingSpots > 0) {
    takeTurn();
  }
  




console.log(player1);
console.log(player2);
})();





