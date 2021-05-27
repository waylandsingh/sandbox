// logic and event handling for the etch a sketch project

// create 16 x 16 squares
const grid = document.querySelector('#grid')
// iterate 16x16 times to create & append child
const container = document.querySelector('#container')
console.log(grid.style)


function drawSquare(n=16) {
    grid.innerHTML = ''
    grid.style.gridTemplateColumns = `repeat(${n},1fr)`;
    grid.style.gridTemplateRows = `repeat(${n},1fr)`;
    // add a background image to 'uncover'

    for (let i=0; i<n*n; i++){
        // create, add the class, and append
        const sq = document.createElement('div')
        sq.classList.value = 'gridsq'
        grid.appendChild(sq)

        // attach event listeners
        sq.addEventListener('mouseenter', () =>{
            sq.style = 'background-color:transparent'
        });
    }

    
}

// add function for the clear with limit 100


// how to get the size of the container, and modify the css of resulting pixels?
drawSquare(20)
