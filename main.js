let input = document.getElementById('input')
let btn = document.getElementById('btn')
let blocks = document.getElementsByClassName('block')
let select = document.getElementById('select')

let func = () => {
  for (let i = 0; i < input.value; i++) {
    if (i> 9) break;
    let block = document.createElement('div')
    block.style.width = '100px'
    block.style.height = '100px'
    block.style.marginBottom = '10px'
    block.style.backgroundColor = select.value
    block.classList.add('block')
    document.body.appendChild(block)
  }
  
}

btn.onclick = () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = select.value
  }
  while(blocks.length > 0){
    blocks[0].remove()
  }
  func()
}

