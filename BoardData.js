// information on the game
class BoardData {
  constructor(pieces) {
    this.pieces = pieces;
  }
  // Returns piece in row, col, or undefined if not exists.
  getPiece(row, col) {
    for (const piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
  }
  //get bool if the Piece exist
  isEmpty(row, col) {
    if (this.getPiece(row, col) !== undefined) {
      return false;
    }
    else {
      return true;
    }
  }
  // get if the player from the smae team
  isPlayer(row, col, player) {
    const piece = this.getPiece(row, col);
    if (piece !== undefined && piece.player === player) {
      return true;
    }
    else return false;

  }
  //get piece index in the array
  getindex(row, col) {
    let i = -1;
    let index;
    for (const piece of this.pieces) {
      i++
      if (piece.row === row && piece.col === col) {
        index = i;
        return index;
      }
    }

  }
  // get team color of piece
  getTeam(row, col) {
    if (this.getPiece(row, col).player == undefined) {
      return undefined;
    }
    if (this.getPiece(row, col).player == WHITE_PLAYER) {
      return WHITE_PLAYER;
    }
    if (this.getPiece(row, col).player == BLACK_PLAYER) {
      return BLACK_PLAYER;
    }
  }
}