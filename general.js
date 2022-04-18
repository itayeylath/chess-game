const WHITE_TYPE = 'white';
const BLACK_TYPE = 'black';

function addImg(cell, type, name) {
    const img = document.createElement("img")
    img.src = 'img/' + type + '/' + name + '.png';
    img.addEventListener("click", () => img.classList.toggle("onclick"));
    cell.appendChild(img);
}

function addImgByIndex(cell, type, index) {

    if (index == 0 || index == 7) {
        addImg(cell, type, 'rook');
    }

    else if (index == 1 || index == 6) {
        addImg(cell, type, 'knight');
    }

    else if (index == 2 || index == 5) {
        addImg(cell, type, 'bishop');
    }

    else if (index == 3) {
        addImg(cell, type, 'queen');
    }
    else {
        addImg(cell, type, 'king');
    }

}


function creatCessBoard() {
    const newdiv = document.createElement('div');
    newdiv.classList.add('container');
    document.body.appendChild(newdiv);
    const table = document.createElement('table');
    newdiv.appendChild(table);

    let i = 0;
    while (i < 8) {
        const row = table.insertRow(i)
        let j = 0;
        while (j < 8) {
            const cell = row.insertCell(j)
            if (i == 0) {
                addImgByIndex(cell, WHITE_TYPE, j);
            }

            else if (i == 1) {
                addImg(cell, WHITE_TYPE, 'pawn');
            }

            else if (i == 6) {
                addImg(cell, BLACK_TYPE, 'pawn');
            }

            else if (i == 7) {
                addImgByIndex(cell, BLACK_TYPE, j);
            }

            j++
        }
        i++
    }

}

window.addEventListener('load', creatCessBoard);



