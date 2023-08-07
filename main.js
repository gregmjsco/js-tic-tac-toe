const gameBoard = (() => {

  let boardArray = [];

  for (i = 0; i < 9; i++){
    boardArray.push('');
  }

  const render = () => {
    console.log(`| ${boardArray[0]} || ${boardArray[1]} || ${boardArray[2]} |
| ${boardArray[3]} || ${boardArray[4]} || ${boardArray[5]} |
| ${boardArray[6]} || ${boardArray[7]} || ${boardArray[8]} |`);
  }


  return {
    boardArray, render,
  };

})();



const playerFactory = (name, marker) => {
  let playerBoard = [];
  let chooseCell = () => {
    let x = prompt('Choose cell', 0);
    playerBoard.push(parseInt(x));
    return x; 
  };
  return {
    name, marker,chooseCell, playerBoard, 
  }
};





const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard;

  let winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  let activePlayer;
  let winnerDeclared;
  let remainingSpots; 

  const playRound = () => {
    let turn;
    if (remainingSpots > 0) {
      turn = activePlayer.chooseCell();
      board.boardArray[turn] = activePlayer.marker;
      remainingSpots -= 1;
      board.render();
      console.log(activePlayer);
      activePlayer = player1 ? player2 : player1;
      console.log(activePlayer);
      turn = activePlayer.chooseCell();
      board.boardArray[turn] = activePlayer.marker;
      remainingSpots -= 1;
      board.render();
    }
  }

  const start = () => {
    winnerDeclared = false;
    activePlayer = player1;
    remainingSpots = 9;
    console.log(board);
    playRound();
  }

  start();

  /*
  Player takes turn to choose grid and place marker
  Switch active player
  repeat until winner found 
  */

})();





