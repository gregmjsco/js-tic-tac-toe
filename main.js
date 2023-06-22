const gameBoard = (() => {

  let board = [];

  for (i = 0; i < 9; i++){
    board.push('');
  }

  return {
    board
  }

})();

console.log(gameBoard.board);

const playerFactory = (name, marker) => {
  return {
    name, marker
  };
};

const game = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  let activePlayer = player1;
  let winnerDeclared = false;
  let remainingSpots = 9; 

  console.log(player1);
console.log(player2);
})();





