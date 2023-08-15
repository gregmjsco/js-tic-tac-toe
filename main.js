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
      //console.log(`START ACTIVE PLAYER IS ${gameController.activePlayer.name}`)
      cell.classList.add(gameController.activePlayer.marker);
      gameController.activePlayer.playerBoard.push(e.target.dataset.value);
      gameController.remainingSpots -= 1;
      cell.style.pointerEvents = 'none';
      console.log(gameController.remainingSpots)
      
      boardArray.forEach((element, index) => {
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
        if(gameController.remainingSpots > 0) {
          if(gameController.checkWin(gameController.activePlayer.playerBoard)){
            console.log(`${gameController.activePlayer.name} WINS`)
            console.log('WINNER')
          }
          gameController.switchPlayer();
        } else if (gameController.remainingSpots == 0)
        console.log('TIE')
       }

      // console.log(`END ACTIVE PLAYER IS ${gameController.activePlayer.name}`)
      }
    )
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


  let winningCombinations = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], ["1", "5", "9"], ["3", "5", "7"]];


  let winnerDeclared = false;
  let activePlayer = player1;
  let remainingSpots = 9;


  function switchPlayer() {
    //console.log("INSIDE SWITCHPLAYER")
    if (this.activePlayer == player1) {
      this.activePlayer = player2;
    } else this.activePlayer = player1
    //console.log(activePlayer.name)
  }


  function checkWin(playerArray){
    playerArray.sort();
    for(let i = 0; i < winningCombinations.length; i++) {
      for(let j = 0; j < winningCombinations[i].length; j++) {
        if (playerArray.includes(winningCombinations[i][0]) && playerArray.includes(winningCombinations[i][1]) && playerArray.includes(winningCombinations[i][2]) && playerArray.length >= 3) {
          return true;
      } else if (!playerArray.includes(winningCombinations[i][0]) && playerArray.includes(winningCombinations[i][1]) && playerArray.includes(winningCombinations[i][2]) && playerArray.length >= 3) {
          break;
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
    winningCombinations
  }
})();





