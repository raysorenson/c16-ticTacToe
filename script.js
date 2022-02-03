let cells = document.querySelectorAll('.row > div'); // array of 9 squares
let turnCounter = 0;                                 //turn counter starts at 0
let tryAgainButton = document.getElementById('reset-button') 

tryAgainButton.addEventListener('click', function () { //reloads page when 'try again' button is clicked
    window.location.reload();
})

for (i = 0; i < cells.length; i ++) {   //for loop with the number of squares
    cells[i].addEventListener('click', cellClicked);  //even listener that calls cellClicked()
}

function cellClicked() {
    
    if (event.target.textContent.length <1 && board.textContent.length %2 == 0) {  //ensures square is empy and places an "X" on odd number of moves
         event.target.textContent = 'X';
     } else if (event.target.textContent.length <1) {  //ensures square is empty before placing an "O"
         event.target.textContent = 'O';     
     } 
     turnCounter ++  //increases turncounter by 1

     checkWin();  //checkWin called
     }

 function checkWin() {   //checks 8 win possibilites for "X" or "O" or declares draw
     if (cells[0].textContent + cells[1].textContent + cells[2].textContent === 'XXX' ||  cells[0].textContent + cells[1].textContent + cells[2].textContent === 'OOO') {
         alert('Winner winner chicken dinner');
     } else if (cells[3].textContent + cells[4].textContent + cells[5].textContent === 'XXX' ||  cells[3].textContent + cells[4].textContent + cells[5].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (cells[6].textContent + cells[7].textContent + cells[8].textContent === 'XXX' ||  cells[6].textContent + cells[7].textContent + cells[8].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (cells[0].textContent + cells[3].textContent + cells[6].textContent === 'XXX' ||  cells[0].textContent + cells[3].textContent + cells[6].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (cells[1].textContent + cells[4].textContent + cells[7].textContent === 'XXX' ||  cells[1].textContent + cells[4].textContent + cells[7].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (cells[2].textContent + cells[5].textContent + cells[8].textContent === 'XXX' ||  cells[2].textContent + cells[5].textContent + cells[8].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (cells[0].textContent + cells[4].textContent + cells[8].textContent === 'XXX' ||  cells[0].textContent + cells[4].textContent + cells[8].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (cells[2].textContent + cells[4].textContent + cells[6].textContent === 'XXX' ||  cells[2].textContent + cells[4].textContent + cells[6].textContent === 'OOO') {
        alert('Winner winner chicken dinner');
     } else if (turnCounter === 9) {
        alert('Draw');
     }           
}

  