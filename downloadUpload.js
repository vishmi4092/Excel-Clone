allCellsData = JSON.parse(localStorage.getItem('sheet1'))
allCells.forEach(x=>{
    updateCellContents(x)
    x.innerHTML = allCellsData[x.id].data
})

let sheetNameInput =  document.querySelector('.workbook-name-input')
document.addEventListener('keydown' , e=>{
    if(e.key == 'Shift')
        localStorage.setItem(sheetNameInput.value , JSON.stringify(allCellsData))
})

