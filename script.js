//Constant variables
const BOARD_SIZE = 8;
const WHITE_PLAYER = 'white';
const BLACK_PLAYER = 'black';
const PAWN = 'pawn';
const ROOK = 'rook';
const KNIGHT = 'knight';
const BISHOP = 'bishop';
const KING = 'king';
const QUEEN = 'queen';
const PIECES = [ROOK, KNIGHT, BISHOP, KING, QUEEN, BISHOP, KNIGHT, ROOK];

//no-Constant variables
let boardData;
let table;
let lastPiece = [];
let lastCell = [];
let counterLastPiece = -1;
// update BoardData after movement
function updatePiecesArray(arr, index, row, col, type, player) {
  arr[index] = new Piece(row, col, type, player);
  if (game.currentPlayer === BLACK_PLAYER) {
    game.currentPlayer = WHITE_PLAYER;
  }
  else {
    game.currentPlayer = BLACK_PLAYER;
  }
}
function ClearBoard() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      table.rows[i].cells[j].classList.remove('possible-move', 'selected', 'enemy');
    }
  }
}
// create 32 pieces for new game
function getInitialpieces() {
  let result = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    result.push(new Piece(0, i, PIECES[i], WHITE_PLAYER));
    result.push(new Piece(1, i, PAWN, WHITE_PLAYER));
    result.push(new Piece(6, i, PAWN, BLACK_PLAYER));
    result.push(new Piece(7, i, PIECES[i], BLACK_PLAYER));
  } return result;
}
//add image to cell
function addImg(cell, player, name) {
  const img = document.createElement("img")
  img.src = 'img/' + player + '/' + name + '.png';
  img.draggable = false;
  cell.appendChild(img);
}
// selected and possible moves decoration, move player and eat enemy- all by click
function onCellClick(row, col) {
  const piece = boardData.getPiece(row, col);
  const selectedCell = table.rows[row].cells[col];

  if (counterLastPiece > -1) {
    if (selectedCell.classList[1] == "possible-move") {
      // move piece 
      if (lastPiece[counterLastPiece] !== undefined && piece == undefined) { }
      game.getMove(row, col, lastPiece[counterLastPiece], lastCell[counterLastPiece]);
    }
    // eat enemy piece
    else if (selectedCell.classList[1] == "enemy") {
      game.getremove(row, col);
      game.getMove(row, col, lastPiece[counterLastPiece], lastCell[counterLastPiece]);
    }
    // Clear all previous selected and possible moves decoration
    ClearBoard();
  }
  //print possible moves for selceted cell
  if (piece !== undefined && game.getTurnMoves(piece) && game.winner === undefined) {
    let possibleMoves = piece.getPossibleMoves();
    for (let possibleMove of possibleMoves) {
      const cellRow = possibleMove[0];
      const cellCol = possibleMove[1];
      const cell = table.rows[cellRow].cells[cellCol];

      if (boardData.getPiece(cellRow, cellCol) == undefined) {
        cell.classList.add('possible-move');
      }//W vs B
      else if (boardData.getTeam(cellRow, cellCol) == WHITE_PLAYER && boardData.getTeam(row, col) == BLACK_PLAYER) {
        cell.classList.add('enemy');
      }//B vs W
      else if (boardData.getTeam(cellRow, cellCol) == BLACK_PLAYER && boardData.getTeam(row, col) == WHITE_PLAYER) {
        cell.classList.add('enemy');
      }
    }
  }
  // Show selected cell
  if (game.winner === undefined) {
    selectedCell.classList.add('selected');
  } lastPiece.push(piece);
  lastCell.push(selectedCell)
  counterLastPiece++;
}
//creat the board
function creatChessBoard() {
  table = document.createElement('table');
  document.body.appendChild(table);

  for (let row = 0; row < BOARD_SIZE; row++) {
    const rowElemnt = table.insertRow();
    for (let col = 0; col < BOARD_SIZE; col++) {
      const cell = rowElemnt.insertCell();
      if ((row + col) % 2 === 0) {
        cell.className = 'light-cell';
      } else {
        cell.className = 'dark-cell';
      } // every click on cell onCellClick will start
      cell.addEventListener('click', () => onCellClick(row, col));
    }
  } //add image for every piece 
  for (let piece of boardData.pieces) {
    addImg(table.rows[piece.row].cells[piece.col], piece.player, piece.type);
  }
}

function initGame() {
  game = new Game(WHITE_PLAYER);
  creatChessBoard();
}
// by loaded the page the g started
window.addEventListener('load', initGame);