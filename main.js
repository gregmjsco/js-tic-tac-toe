const gameBoard = (() => {

  let boardArray = [];

  for (i = 0; i < 9; i++){
    boardArray.push('');
  }


  return {
    boardArray
  };

})();



const playerFactory = (name, marker) => {
  let chosenCell;
  const takeTurn = () => chosenCell = prompt('Choose a cell from 0 to 8');

  return {
    name, marker, takeTurn, chosenCell
  };
};




const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard.boardArray;


  let activePlayer = player1;
  let winnerDeclared = false;
  let remainingSpots = 9; 

  activePlayer.takeTurn();
  console.log(activePlayer.chosenCell);

  /*
  Player takes turn to choose grid and place marker
  Switch active player
  repeat until winner found 
  */




})();





