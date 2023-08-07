const gameBoard = (() => {

  let boardArray = [];

  for (i = 0; i < 9; i++){
    boardArray.push('');
  }

  const render = () => {
    console.log(boardArray);
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

  }

  start();

  /*
  Player takes turn to choose grid and place marker
  Switch active player
  repeat until winner found 
  */

})();





