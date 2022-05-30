let functionInput = document.querySelector('.function-input')


functionInput.addEventListener('input' , ()=>{
    document.addEventListener('keydown',(e)=>{
        if(e.key == 'Enter')
            {
                allCellsData[cellID.value].formula = functionInput.value
                formulaEval()
            }})
})

function formulaEval()
{
    let parentCell = parentCells(cellID.value)
    if(parentCell == null)
        return
    parentCell.forEach(id => {
        formulaText = formulaText.replace(id , allCellsData[id].data)
    let result = eval(formulaText)
    document.getElementById(cellID.value).innerHTML = result
    allCellsData[cellID.value].data = result
    });
    
}

function parentCells(id)
{
    let formulaText = allCellsData[id].formula.toUpperCase()
    if(formulaText == '')
        return
    let re = /([A-Z][0-9])+/g
    return formulaText.match(re)
}

