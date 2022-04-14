
    // // דוג לפונק בתוך פונק של טיימר לביצוע
    // out(() => {
    //     console.log("itay")
    // }, 2000);

    window.onload=() => {
        const newdiv = document.createElement('div')
        newdiv.classList.add('container')
        const body = document.querySelector('body')
        body.appendChild(newdiv)
        const table = document.createElement('table')
        newdiv.appendChild(table)

        let i = 0 ;
        while (i < 8) {
            const row = table.insertRow()
            let j =0 ;
            while(j<8) {
             const cell = row.insertCell(j)
             j++
            }
            
            i++
            
        }
    }