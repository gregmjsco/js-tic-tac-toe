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

  let winningCombinationsStrings = winningCombinations.forEach((element) => console.log(element.toString()));
  console.log(winningCombinations);

  let activePlayer;
  let winnerDeclared;
  let remainingSpots; 

  const playRound = () => {
    let turn = activePlayer.chooseCell();
    board.boardArray[turn - 1] = activePlayer.marker;
    remainingSpots -= 1;
    board.render();
  };

  const switchPlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else (
      activePlayer = player1
    );
  }


  function checkForWin(playerArray){
    for(let i = 0; i < winningCombinations.length; i++) {
      for(let j = 0; j < winningCombinations[i].length; j++) {
        //console.log(winningCombinations[i][j]);
        //console.log(playerArray);
        if (playerArray.includes(winningCombinations[i][0]) && playerArray.includes(winningCombinations[i][1]) && playerArray.includes(winningCombinations[i][2]) && playerArray.length >= 3) {
          return true;
      } else if (!playerArray.includes(winningCombinations[i][0]) && playerArray.includes(winningCombinations[i][1]) && playerArray.includes(winningCombinations[i][2]) && playerArray.length >= 3) {
          break;
      } else {
          false;
      }
      }
    }
  }
  function arrayAlreadyHasArray(arr, playerArray){
        for(var i = 0; i<arr.length; i++){
            let checker = []
            for(var j = 0; j<arr[i].length; j++){
                if(arr[i][j] === playerArray[j]){
                    checker.push(true)
                    
                } else {
                    checker.push(false)
                    
                }
            }
            console.log(checker)
            if (checker.every(check => check === true)){
                return true
            }
        }
        return false
    }
  
  const checkWin = () => {
    result = arrayAlreadyHasArray(winningCombinations, activePlayer.playerBoard);

/*
function checkForWin(whichPlayer){
  - iterate over the winConditions array, each of which 
    represents a single winCondition.
    - For each winCondition, check if each value is present 
      anywhere in the whichPlayer. 
      - If it is not, drop out of the loop, this not a win
      - If all the values of this winCondition are present in 
        whichPlayer, then we can return a win!
  - If we loop through all the winConditions and fall out the bottom, no win.
}
*/
    console.log(result);
    if (result == true) {
      console.log(`${activePlayer.name} WINS`);
    }
  };



  const start = () => {
    winnerDeclared = false;
    activePlayer = player1;
    remainingSpots = 9;
    console.log(board);
    while (winnerDeclared == false) {
      if (remainingSpots > 0 && winnerDeclared != true) {
        playRound();  
        if(checkForWin(activePlayer.playerBoard)){
          console.log(`${activePlayer.name} WINS`)
        }
        switchPlayer();
        if (remainingSpots == 1) {
          console.log('GAME IS A TIE');
        }
       }
      }   
  }

  start();

  /*
  Player takes turn to choose grid and place marker
  Switch active player
  repeat until winner found 
  */

})();





