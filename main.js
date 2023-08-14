const playerFactory = (name, marker) => {
  let playerBoard = [];
  return {
    name, marker, playerBoard, 
  }
};

const gameBoard = (() => {

  const boardArray = Array.from(document.querySelectorAll(".cell"));
  
  let cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    cell.addEventListener('click', (e) => {
      cell.classList.add(gameController.activePlayer.marker);
      gameController.activePlayer.playerBoard.push(e.target.dataset.value);
      gameController.remainingSpots -= 1;
      console.log(gameController.remainingSpots)
      gameController.checkWin(gameController.activePlayer.playerBoard);

      boardArray.forEach((element, index) => {
        console.log(element)
        console.log(index)
        if (element.classList.contains("X") && element.childNodes.length == 0){
          const div = document.createElement('div');
          div.classList.add("cross");
          boardArray[index].appendChild(div);
        
          
        } else if (element.classList.contains("O") && element.childNodes.length == 0) {
          const div = document.createElement('div');
          div.classList.add('circle');
          boardArray[index].appendChild(div);
          return
        }
       });

      if (gameController.winnerDeclared == false) {
        if (gameController.remainingSpots > 0) {
          gameController.switchPlayer();
          console.log(gameController.activePlayer.name)
        } else if (gameController.remainingSpots == 0) {
          console.log("TIE")
        }
      }
    })
  })
  
  

  console.log(boardArray)
  


  /*const render = () => {
    console.log(boardArray)
     
  };*/


  return {
    boardArray, 
    //render,
  };
})();





const gameController = (() => {
  const player1 = playerFactory('Player One', 'X');
  const player2 = playerFactory('Player Two', 'O');

  const board = gameBoard;

  

  let winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];


  let winnerDeclared = false;
  let activePlayer = player1;
  let remainingSpots = 9;


  const switchPlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else (
      activePlayer = player1
    );
  }


  function checkWin(playerArray){
    for(let i = 0; i < winningCombinations.length; i++) {
      for(let j = 0; j < winningCombinations[i].length; j++) {
        if (playerArray.includes(winningCombinations[i][0]) && playerArray.includes(winningCombinations[i][1]) && playerArray.includes(winningCombinations[i][2]) && playerArray.length >= 3) {
          winnerDeclared = true;
          console.log(`${activePlayer.name} WINS`)
          return true;
      } else if (!playerArray.includes(winningCombinations[i][0]) && playerArray.includes(winningCombinations[i][1]) && playerArray.includes(winningCombinations[i][2]) && playerArray.length >= 3) {
          break;
      } else {
          false;
      }
      }
    }
  }

      
 


  return {
    activePlayer,
    winnerDeclared,
    remainingSpots,
    switchPlayer,
    checkWin,

  }
})();





