
// // דוג לפונק בתוך פונק של טיימר לביצוע
// setTimeout(() => {
//     console.log("itay")
// }, 2000);

// //דוגמא לירושה
// class Person {
//     constructor(name) {
//       this.name = name;
//       this.age = 0;
//     }
// // itay inherits from peroson
//     class itay extends Person {

//     }

// class line {
//     constructor(name){
//         this.name = name ;
//         this.one = 0 ;
//     }
// }

// const line = new line('white');
// white.one = "img/knight.png" ;

const pushLine = () => {

}

window.onload = () => {
    const newdiv = document.createElement('div')
    newdiv.classList.add('container')
    document.body.appendChild(newdiv)
    const table = document.createElement('table')
    newdiv.appendChild(table)

    let i = 0;
    while (i < 8) {
        const row = table.insertRow(i)
        let j = 0;
        while (j < 8) {
            const cell = row.insertCell(j)
            if (i == 1) {
                let img = document.createElement("img")
                img.src = "img/pawn.png"
                cell.appendChild(img)
            }

            if (i == 6) {
                let img = document.createElement("img")
                img.src = "img/Bpawn.png"
                cell.appendChild(img)
            }

            if (i == 0) {
                if (j == 0 || j == 7) {
                    let img = document.createElement("img")
                    img.src = "img/rook.png"
                    cell.appendChild(img)
                }

                if (j == 1 || j == 6) {
                    let img = document.createElement("img")
                    img.src = "img/knight.png"
                    cell.appendChild(img)
                }

                if (j == 2 || j == 5) {
                    let img = document.createElement("img")
                    img.src = "img/bishop.png"
                    cell.appendChild(img)
                }

                if (j == 3) {
                    let img = document.createElement("img")
                    img.src = "img/queen.png"
                    cell.appendChild(img)
                }
                if (j == 4) {
                    let img = document.createElement("img")
                    img.src = "img/king.png"
                    cell.appendChild(img)
                }
            }

            if (i == 7) {
                if (j == 0 || j == 7) {
                    let img = document.createElement("img")
                    img.src = "img/Brook.png"
                    cell.appendChild(img)
                }

                if (j == 1 || j == 6) {
                    let img = document.createElement("img")
                    img.src = "img/Bknight.png"
                    cell.appendChild(img)
                }

                if (j == 2 || j == 5) {
                    let img = document.createElement("img")
                    img.src = "img/Bbishop.png"
                    cell.appendChild(img)
                }

                if (j == 3) {
                    let img = document.createElement("img")
                    img.src = "img/Bqueen.png"
                    cell.appendChild(img)
                }
                if (j == 4) {
                    let img = document.createElement("img")
                    img.src = "img/Bking.png"
                    cell.appendChild(img)
                }
            }



            j++
        }
        i++
    }




}



