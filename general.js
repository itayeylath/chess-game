const BOARD_SIZE = 8;
const WHITE_PLAYER = 'white';
const BLACK_PLAYER = 'black';

let selectedCell;
let pieces = [];

class Piece {
    constructor(row, col, type, player) {
      this.row = row;
      this.col = col;
      this.type = type;
      this.player = player;
    }
  }
  
  function getInitialBoard() {
    let result = [];
    result.push(new Piece(0, 0, "rook", WHITE_PLAYER))
    result.push(new Piece(0, 1, "knight", WHITE_PLAYER))
    result.push(new Piece(0, 2, "bishop", WHITE_PLAYER))
    result.push(new Piece(0, 3, "queen", WHITE_PLAYER))
    result.push(new Piece(0, 4, "king", WHITE_PLAYER))
    result.push(new Piece(0, 5, "bishop", WHITE_PLAYER))
    result.push(new Piece(0, 6, "knight", WHITE_PLAYER))
    result.push(new Piece(0, 7, "rook", WHITE_PLAYER))

    result.push(new Piece(1, 0, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 1, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 2, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 3, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 4, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 5, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 6, "pawn", WHITE_PLAYER))
    result.push(new Piece(1, 7, "pawn", WHITE_PLAYER))

    result.push(new Piece(6, 0, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 1, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 2, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 3, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 4, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 5, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 6, "pawn", BLACK_PLAYER))
    result.push(new Piece(6, 7, "pawn", BLACK_PLAYER))

    result.push(new Piece(7, 0, "rook", BLACK_PLAYER))
    result.push(new Piece(7, 1, "knight", BLACK_PLAYER))
    result.push(new Piece(7, 2, "bishop", BLACK_PLAYER))
    result.push(new Piece(7, 3, "queen", BLACK_PLAYER))
    result.push(new Piece(7, 4, "king", BLACK_PLAYER))
    result.push(new Piece(7, 5, "bishop", BLACK_PLAYER))
    result.push(new Piece(7, 6, "knight", BLACK_PLAYER))
    result.push(new Piece(7, 7, "rook", BLACK_PLAYER))
    return result;
  }

function addImg(cell, player, name) {
    const img = document.createElement("img")
    img.src = 'img/' + player + '/' + name + '.png';
    // img.addEventListener("click", () => img.classList.toggle("onclick"));
    cell.appendChild(img);
}

function addImgByIndex(cell, player, index) {

    if (index == 0 || index == 7) {
        addImg(cell, player, 'rook');
    }

    else if (index == 1 || index == 6) {
        addImg(cell, player, 'knight');
    }

    else if (index == 2 || index == 5) {
        addImg(cell, player, 'bishop');
    }

    else if (index == 3) {
        addImg(cell, player, 'queen');
    }
    else {
        addImg(cell, player, 'king');
    }

}

function onCellClick(event) {
    if (selectedCell !== undefined) {
      selectedCell.classList.remove('selected');
    }
    selectedCell = event.currentTarget;
    selectedCell.classList.add('selected');
  }

function creatCessBoard() {
    const table1 = document.createElement('table');
    document.body.appendChild(table1);
    
    for (let i = 0; i < BOARD_SIZE; i++) {
      const row = table1.insertRow();
      for (let j = 0; j < BOARD_SIZE; j++) {
        const cell = row.insertCell();
        cell.id = "cell-" + i.toString() + "_" + j.toString();
        if ((i + j) % 2 === 0) {
          cell.className = 'light-cell';
        } else {
          cell.className = 'dark-cell';
        }
        cell.addEventListener('click', onCellClick);
      }
    }

    // const newdiv = document.createElement('div');
    // newdiv.classList.add('container');
    // document.body.appendChild(newdiv);
    // const table = document.createElement('table');
    // newdiv.appendChild(table);

    // // let i = 0;
    // // while (i < 8) {
    // //     const row = table.insertRow(i)
    // //     let j = 0;
    // //     while (j < 8) {
    // //         const cell = row.insertCell(j)
    // //         cell.addEventListener('click', onCellClick);

    // //         j++
    // //     }
    // //     i++
    // // }

    pieces = getInitialBoard();

    for (let piece of pieces) {
      addImg(table1.rows[piece.row].cells[piece.col], piece.player, piece.type);
    }
}

window.addEventListener('load', creatCessBoard);



