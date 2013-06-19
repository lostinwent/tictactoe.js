$(document).ready(function(){

  var board = ["1", "2", "3",
               "4", "5", "6",
               "7", "8", "9"];

  var playerOneTurn = true;

  var switchTurn = function() {
    playerOneTurn = !playerOneTurn;
  };

  var gameWon = function(mark) {
    result = false;
    // rows
    if (board[0] == mark && board[1] == mark && board[2] == mark) {
      result = true;
    } else if (board[3] == mark && board[4] == mark && board[5] == mark) {
      result = true;
    } else if (board[6] == mark && board[7] == mark && board[8] == mark) {
      result = true;
    // columns
    } else if (board[0] == mark && board[3] == mark && board[6] == mark) {
      result = true;
    } else if (board[1] == mark && board[4] == mark && board[7] == mark) {
      result = true;
    } else if (board[2] == mark && board[5] == mark && board[8] == mark) {
      result = true;
    // diagonal
    } else if (board[0] == mark && board[4] == mark && board[8] == mark) {
      result = true;
    } else if (board[2] == mark && board[4] == mark && board[6] == mark) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  var gameTied = function() {
    count = 0;
    for (var i = 0; i < board.length; i++) {
      if (isNaN(parseInt(board[i]))) {
        count += 1;
      }
    }
    // using 9 as the count because otherwise the final tile on board
    // will not be filled in at the end of the game
    // this method is a hack and im bad at javascripts
    if (count == 9) {
      return true;
    }
  };


  $('#board tr td').click(function() {
    var value = $(this).text();

    if (gameTied()) {
      alert("GAME OVER!");
    } else {
      if (!(value == 'X' || value == 'O')) {
        if (playerOneTurn) {
          $(this).html("<p>X</p>");
          board[value - 1] = "X";
          if (gameWon("X")) {
            alert("Player 1 wins!");
          } else {
            switchTurn();
          }
          // console.log(board);
        } else {
          $(this).html("<p>O</p>");
          board[value - 1] = "O";
          if (gameWon("O")) {
            // replace alerts?
            alert("Player 2 wins!");
          } else {
            switchTurn();
          }
          // console.log(board);
        }
      }
    }
  });


  $('.styled-button-1').click(function() {
    location.reload();
  });

  $(window).unload(function() {
    location.reload();
  });

});
