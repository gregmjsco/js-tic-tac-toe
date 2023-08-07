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
    return prompt('Choose cell', 0);
  };
  return {
    name, marker,chooseCell, playerBoard,
  }
};





const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard;


  let activePlayer;
  let winnerDeclared;
  let remainingSpots; 

  const playRound = () => {
    let turn;
    if (remainingSpots > 0) {
      turn = activePlayer.chooseCell();
      board.boardArray[turn] = activePlayer.marker;
      activePlayer.playerBoard.push(turn);
      console.log(activePlayer.playerBoard);
      remainingSpots -= 1;
      board.render();
      console.log(activePlayer);
      activePlayer = player1 ? player2 : player1;
      console.log(activePlayer);
      turn = activePlayer.chooseCell();
      board.boardArray[turn] = activePlayer.marker;
      activePlayer.playerBoard.push(turn);
      
      remainingSpots -= 1;
      board.render();
    }
  }

  const start = () => {
    winnerDeclared = false;
    activePlayer = player1;
    remainingSpots = 9;
    console.log(board);
    board.render();
    playRound();
  }

  start();

  /*
  Player takes turn to choose grid and place marker
  Switch active player
  repeat until winner found 
  */

})();





