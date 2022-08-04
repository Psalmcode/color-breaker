const container = document.getElementById('container')
const colors = ['#e743c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'green', 'purple', 'red', 'steelblue', 'yellow', 'orange', 'blue', 'white']

const SQUARES = 15000

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    container.appendChild(square)


    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.background = '#1d1d1d27'
    element.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.308)'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}