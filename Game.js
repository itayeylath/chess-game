
class Game {
  constructor(firstPlayer) {
    //creat array of pieces for new game
    boardData = new BoardData(getInitialpieces());
    this.currentPlayer = firstPlayer;
    this.winner = undefined;
  }
  // up date array after movment
  updatePiecesArray(pieces, index, row, col, type, player) {
    pieces[index] = new Piece(row, col, type, player);
    //get the Player for next turn
    if (this.currentPlayer === BLACK_PLAYER) {
      this.currentPlayer = WHITE_PLAYER;
    }
    else {
      this.currentPlayer = BLACK_PLAYER;
    }
  }
  // get piece move, add image and update the BoardData
  getMove(row, col, lastPiece, lastCell) {
    addImg(table.rows[row].cells[col], lastPiece.player, lastPiece.type);
    lastCell.getElementsByTagName("img")[0].remove();
    this.updatePiecesArray(boardData.pieces, boardData.getindex(lastPiece.row, lastPiece.col), row, col, lastPiece.type, lastPiece.player);
  }
  // get bool if it your turn
  getTurnMoves(piece) {
    if (this.currentPlayer == piece.player) {
      return true;
    }
    else {
      return false;
    }
  }
  // remove the eaten Piece
  getremove(row, col) {
    // get the end of the gaame uf the king eaten
    if (boardData.pieces[boardData.getindex(row, col)].type === KING) {
      if (this.currentPlayer === WHITE_PLAYER) {
        this.winner = WHITE_PLAYER;
      } else {
        this.winner = BLACK_PLAYER;
      }
      const WIneerPop = document.createElement("div");
      WIneerPop.textContent = "the winner is " + this.winner;
      WIneerPop.className = 'winner';
      table.appendChild(WIneerPop);
    }
    boardData.pieces.splice(boardData.getindex(row, col), 1);
    table.rows[row].cells[col].getElementsByTagName("img")[0].remove();
  }
}
