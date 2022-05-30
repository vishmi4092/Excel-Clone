let colNameCont = document.querySelector('.col-name-cont')
let rowNameCont = document.querySelector('.row-name-cont')
let inputCellCont = document.querySelector('.input-cell-cont')
let cells = document.querySelector('.cells-cont')
let cellID = document.querySelector('.cell-name-display')

cellID.value = 'A1'

for(let i = 0 ;i<26 ; i++)
{
let colNameCell = document.createElement('div')

colNameCell.innerText = String.fromCharCode(65 + i)
colNameCont.appendChild(colNameCell)
}

for(let i = 1 ; i<=100 ; i++)
{
    let rowNameCell = document.createElement('div')
    rowNameCell.innerText = i 
    rowNameCont.appendChild(rowNameCell)
}

function cellData(){

    this.data = ''
    this.bold = false
    this.italic = false 
    this.underline = false
    this.font = 'Monserrat'
    this.fontSize = 10
    this.color = '#000000'
    this.formula = ''
}

for(let i =0 ; i<100 ; i++)
{
    let row = document.createElement('div')
    row.setAttribute('class' , 'row')
    for(let j = 0 ; j<26 ; j++)
    {
        let cell = document.createElement('div')
        cell.setAttribute('class','cell')
        let id = String.fromCharCode(65+j)+String(i+1)
        cell.setAttribute('id', id)
        cell.setAttribute('contentEditable' , 'true')
        row.appendChild(cell)
    }

    cells.appendChild(row)
}

let allCellsData = {}
for (let i = 1; i <= 100; i++) {
    for (let j = 0; j < 26; j++) {
        let id = String.fromCharCode(65 + j)+String(i)
        allCellsData[id] = new cellData()
    }
}

let allCells = document.querySelectorAll('.cell')
allCells.forEach((x)=>{
    x.addEventListener('click',(e)=>{
        let lastCellID = cellID.value
        document.getElementById(lastCellID).style.backgroundColor = 'white'
        cellID.value = x.id;
        x.style.backgroundColor = '#f4f4f4'
        updateCellContents(document.getElementById(cellID.value))
    })
})



