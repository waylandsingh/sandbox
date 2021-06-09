// logic and event handling for the etch a sketch project

// create 16 x 16 squares
const grid = document.querySelector('#grid')
// iterate 16x16 times to create & append child
const container = document.querySelector('#container')
const sideLength = container.clientHeight


function drawSquare(n = 16) {
    grid.innerHTML = ''
    grid.style.gridTemplateColumns = `repeat(${n},1fr)`;
    grid.style.gridTemplateRows = `repeat(${n},1fr)`;
    const gridSqSize = calcGridSq(sideLength, n);

    // add a background image to 'uncover'

    for (let i=0; i<n*n; i++){
        // create, add the class, and append
        const sq = document.createElement('div')
        sq.classList.value = 'gridsq'
        sq.style.width = gridSqSize;
        sq.style.height = gridSqSize;
        grid.appendChild(sq)

        // attach event listeners
        sq.addEventListener('mouseenter', () =>{
            sq.style = 'background-color:transparent'
        });
    }

    console.log('something heres')
}

// function to calculate 'gridsize'
function calcGridSq(sideLengthPx, n) {
    return `${sideLengthPx / n}px`
}

// size when the button is clicked
function resize() {
    // get user input...
    const newDimension = prompt('input an integer for # of pixels')
    
    // and run the drawsquare function with the input
    drawSquare(parseInt(newDimension))
}

// how to get the size of the container, and modify the css of resulting pixels?
drawSquare(16)
console.log('javascript loaded')