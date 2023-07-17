const gameBoard = (() => {

  let boardArray = [];

  for (i = 0; i < 9; i++){
    boardArray.push('');
  }

  const render = () => {
    boardArray.forEach(myFunc);
  };

  function myFunc(item, index, arr) {
    arr[index] = item;
  }

  return {
    boardArray, render
  };

})();



const playerFactory = (name, marker) => {

  const placeMarker = (board, cell) => {
    const gridID = board.cell
  };

  return {
    name, marker, placeMarker
  };
};




const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard.boardArray;

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
  

const changeTurn = () => {
  activePlayer = activePlayer === player1 ? player2 : player1;
};



console.log(player1);
console.log(player2);
})();





