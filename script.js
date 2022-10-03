// Your code here
const table = document.getElementById("table")

const addRow = document.getElementById("add-row")

addRow.onclick = function makeRow() {
    const row = document.createElement("tr")
    for (let i = 0; i < 20; i++) {
        const td = document.createElement("td")
        row.appendChild(td)
    }
    table.appendChild(row)
}