class solider {
    constructor(type, color, team, img) {

        this.type = type;
        this.color = color;
        this.team = team;
        this.img = img;
    }

}

const pawn1 = new solider("pawn", "black", 1, "pawn");

const newdiv = document.createElement('div')
newdiv.classList.add('container')
document.body.appendChild(newdiv)
const table = document.createElement('table')
newdiv.appendChild(table)
pawn1