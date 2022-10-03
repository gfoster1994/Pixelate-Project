// Your code here
const table = document.getElementById("table")

const addRow = document.getElementById("add-row")

let chosenColor = "red"

addRow.onclick = function makeRow() {
    const row = document.createElement("tr")
    for (let i = 0; i < 20; i++) {
        const td = document.createElement("td")
        row.appendChild(td)
    }
    table.appendChild(row)
}

colors.addEventListener("change", function(event) {
    chosenColor = event.target.value
});

table.onclick = function colorize(event){
    if (event.target.tagName === "TD") {
        const target = event.target
        if (target.className.length) {
            target.className = ''
        } else {
            target.className = chosenColor
        }
    }
}

/*
table.onclick = function colorize(event){
    const target = event.target
    if (target.className.length) {
        target.className = ''
    } else {
        target.className = chosenColor
    }
}
*/

/* 
let color = document.getElementById("colors")

color.addEventListener("change", function(event) {
    console.log(event.target.value)
    color = event.target.value
});
*/