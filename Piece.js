//basic piece information
class Piece {
    constructor(row, col, type, player) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.player = player;
    } //possible move of every piece
    getPossibleMoves() {
        let moves = [];
        if (this.type === PAWN) {
            moves = this.getPawnMoves(boardData);
        } else if (this.type === ROOK) {
            moves = this.getRookMoves(boardData);
        } else if (this.type === KNIGHT) {
            moves = this.getKnightMoves(boardData);
        } else if (this.type === BISHOP) {
            moves = this.getBishopMoves(boardData);
        } else if (this.type === KING) {
            moves = this.getKingMoves(boardData);
        } else if (this.type === QUEEN) {
            moves = this.getQueenMoves(boardData);
        } //bug check
        else {
            console.log("Unknown type", type)
        } let filteredMoves = [];
        // filter moves in the board 8X8
        for (let absoluteMove of moves) {
            const absoluteRow = absoluteMove[0];
            const absoluteCol = absoluteMove[1];
            if (absoluteRow >= 0 && absoluteRow <= 7 && absoluteCol >= 0 && absoluteCol <= 7) {
                filteredMoves.push(absoluteMove);
            }
        } return filteredMoves;
    }  //6 functions for every piece specific move
    getPawnMoves(boardData) {
        let result = [];
        //movs for W direction
        if (this.player == WHITE_PLAYER) {
            // first move 
            if (this.row == 1) {
                let opositions = [];
                let counter = 0;
                opositions.push([this.row + 1, this.col]);
                opositions.push([this.row + 2, this.col]);
                for (const oposition of opositions) {
                    if (boardData.isEmpty(oposition[0], oposition[1]) == true && counter == 0) {
                        result.push([oposition[0], oposition[1]])
                    } else {
                        counter++
                    }
                }
            }  //regular move
            else if (boardData.isEmpty(this.row + 1, this.col) == true) {
                result.push([this.row + 1, this.col]);
            }  //eat move
            if (boardData.isEmpty(this.row + 1, this.col + 1) == false) {
                result.push([this.row + 1, this.col + 1])
            }
            if (boardData.isEmpty(this.row + 1, this.col - 1) == false) {
                result.push([this.row + 1, this.col - 1])
            }
        } //movs for B direction
        // first move
        else if (this.row == 6) {
            let opositions = [];
            let counter = 0;
            opositions.push([this.row - 1, this.col]);
            opositions.push([this.row - 2, this.col]);
            for (const oposition of opositions) {
                if (boardData.isEmpty(oposition[0], oposition[1]) == true && counter == 0) {
                    result.push([oposition[0], oposition[1]])
                }
                else {
                    counter++
                }
            }
        }   //regular move 
        else if (boardData.isEmpty(this.row - 1, this.col) == true) {
            result.push([this.row - 1, this.col]);
        }

        //eat move
        if (boardData.isEmpty(this.row - 1, this.col + 1) == false) {
            result.push([this.row - 1, this.col + 1])
        }
        if (boardData.isEmpty(this.row - 1, this.col - 1) == false) {
            result.push([this.row - 1, this.col - 1])
        }

        return result;
    }

    getRookMoves(boardData) {
        let result = [];
        result = result.concat(this.getMovesInDirection(-1, 0, boardData));
        result = result.concat(this.getMovesInDirection(1, 0, boardData));
        result = result.concat(this.getMovesInDirection(0, -1, boardData));
        result = result.concat(this.getMovesInDirection(0, 1, boardData));
        return result;
    }

    getKnightMoves(boardData) {
        let result = [];
        const Options = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]];
        for (let Option of Options) {
            let row = this.row + Option[0];
            let col = this.col + Option[1];
            if (!boardData.isPlayer(row, col, this.player)) {
                result.push([row, col]);
            }
        } return result;
    }

    getBishopMoves(boardData) {
        let result = [];
        result = result.concat(this.getMovesInDirection(1, 1, boardData));
        result = result.concat(this.getMovesInDirection(1, -1, boardData));
        result = result.concat(this.getMovesInDirection(-1, 1, boardData));
        result = result.concat(this.getMovesInDirection(-1, -1, boardData));
        return result;
    }

    getKingMoves(boardData) {
        let result = [];
        const Options = [[1, 0], [1, -1], [1, 1], [0, -1], [0, 1], [-1, 0], [-1, 1], [-1, -1]];
        for (let Option of Options) {
            let row = this.row + Option[0];
            let col = this.col + Option[1];
            if (!boardData.isPlayer(row, col, this.player)) {
                result.push([row, col]);
            }
        } return result;
    }

    getQueenMoves(boardData) {
        let result = [];
        result = result.concat(this.getBishopMoves(boardData));
        result = result.concat(this.getRookMoves(boardData));
        return result;
    }
    //stop possible moves after other player
    getMovesInDirection(directionRow, directionCol, boardData) {
        let result = [];
        for (let i = 1; i < BOARD_SIZE; i++) {
            let row = this.row + directionRow * i;
            let col = this.col + directionCol * i;
            if (boardData.isEmpty(row, col) == true) {
                result.push([row, col]);
            } else {
                result.push([row, col]);
                return result;
            }
        } return result;
    }
}