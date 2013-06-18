// var board =  [0, 1, 2
//               3, 4, 5,
//               6, 7, 8]
// var board =  [1, 2, 3
//               4, 5, 6,
//               7, 8, 9]

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




// x winner on column
var board = ["X", "2", "3", "X", "X", "6", "X", "X", "X"];
console.log(gameWon("X"));

