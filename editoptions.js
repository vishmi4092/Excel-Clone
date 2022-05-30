let boldBtn = document.querySelector('.bold-btn')
let italicBtn = document.querySelector('.italic-btn')
let underlineBtn = document.querySelector('.underline-btn')

let fontSelect = document.querySelector('.font-select')
let sizeSelect = document.querySelector('.size-select')
let textColorInput = document.getElementById('color-input')

//bold Update
boldBtn.addEventListener('click',(e)=>{
    allCellsData[cellID.value].bold = !allCellsData[cellID.value].bold
    updateCellContents(document.getElementById(cellID.value))
})

//Italic Update
italicBtn.addEventListener('click',(e)=>{
    allCellsData[cellID.value].italic = !allCellsData[cellID.value].italic
    updateCellContents(document.getElementById(cellID.value))
})

//Underline update
underlineBtn.addEventListener('click',(e)=>{
    allCellsData[cellID.value].underline = !allCellsData[cellID.value].underline
    updateCellContents(document.getElementById(cellID.value))
})

//font-family update
fontSelect.addEventListener('change' , ()=>{
    allCellsData[cellID.value].font = fontSelect.value
})

//font-size update
sizeSelect.addEventListener('change' , ()=>{
    allCellsData[cellID.value].fontSize = sizeSelect.value
    updateCellContents(document.getElementById(cellID.value))
})

//text color update
textColorInput.addEventListener('input',()=>{
    allCellsData[cellID.value].color = textColorInput.value
    updateCellContents(document.getElementById(cellID.value))
})

//apply-back on cell
function updateCellContents(x){

       if(allCellsData[x.id].bold)
        {boldBtn.style.border  = 'solid 1px grey'
        boldBtn.style.borderRadius  = '3px'}
       else
        {boldBtn.style.border  = 'none'}
       x.style.fontWeight = allCellsData[x.id].bold ?  'bold': 'normal'


       if(allCellsData[x.id].italic)
       {   italicBtn.style.border = 'solid 1px grey'
           italicBtn.style.borderRadius = '3px'  }
       else
          { italicBtn.style.border = 'none '}
       x.style.fontStyle = allCellsData[x.id].italic ? 'italic' : 'normal'


       if(allCellsData[x.id].underline)
       { underlineBtn.style.border = 'solid 1px grey'
           underlineBtn.style.borderRadius = '3px' }
       else{
           underlineBtn.style.border = 'none '}
       x.style.textDecoration = allCellsData[x.id].underline ? 'underline' : 'none' 
       
       
       
       inputCellCont.style.fontSize = String(allCellsData[x.id].fontSize*10)+'%'
       x.style.color = allCellsData[x.id].color

       functionInput.value = allCellsData[x.id].formula
       formulaEval()
}

//data update
allCells.forEach((x)=>{
    x.addEventListener('input',()=>{
        allCellsData[cellID.value].data = x.innerHTML
        updateCellContents(x)
    })
})
