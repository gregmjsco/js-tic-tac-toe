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
  let chooseCell = () => {
    return prompt('Choose cell', 0);
  };
  return {
    name, marker,chooseCell
  }
};





const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard;


  let activePlayer;
  let winnerDeclared;
  let remainingSpots = 9; 

  const start = () => {
    winnerDeclared = false;
    activePlayer = player1;
    console.log(board);
    board.render();
    let turn = activePlayer.chooseCell();
    console.log({turn});
    board.boardArray[turn] = activePlayer.marker;
    console.log(board.boardArray);
    board.render();

  }

  start();

  /*
  Player takes turn to choose grid and place marker
  Switch active player
  repeat until winner found 
  */

})();





