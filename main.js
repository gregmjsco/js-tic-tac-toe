const gameBoard = (() => {

  const gameBoard = document.querySelector("#gameboard")
  const boardArray = Array.from(document.querySelectorAll(".cell"));
  console.log(boardArray)
  
  

  function addGo(e) {
    const goDisplay = document.createElement('div')

  }

  const render = () => {
    console.log(boardArray)
     boardArray.forEach((element, index) => {
      console.log(element)
      console.log(index)
      if (element.classList.contains("X")){
        const div = document.createElement('div');
        div.classList.add("cross");
        boardArray[index].appendChild(div);
        
      } else if (element = "O") {
        const div = document.createElement('div');
        div.classList.add('circle');
        boardArray[index].appendChild(div);
      }
     });
  };


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
    let turn = activePlayer.chooseCell();
    board.boardArray[turn - 1].classList.add(activePlayer.marker)
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


  function checkWin(playerArray){
    for(let i = 0; i < winningCombinations.length; i++) {
      for(let j = 0; j < winningCombinations[i].length; j++) {
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



  const start = () => {
    winnerDeclared = false;
    activePlayer = player1;
    remainingSpots = 9;
    console.log(board);
    while (winnerDeclared == false) {
      if (remainingSpots > 0 && winnerDeclared != true) {
        playRound();  
        if(checkWin(activePlayer.playerBoard)){
          console.log(`${activePlayer.name} WINS`)
        }
        switchPlayer();
        if (remainingSpots == 1) {
          console.log('GAME IS A TIE');
          break
        }
       }
      }   
  }

  start();
 
})();





