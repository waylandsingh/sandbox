// example two
const playerOne = {
    name: "tim",
    marker: "X"
  }
  
  const playerTwo = {
    name: "jenn",
    marker: "O"
  }

// console.log(playerOne)

// Object Constructors: a cleaner way to create objects
// Looks like a function, e.g.
function Player(name, marker) {
    this.name = name
    this.marker = marker
}

// call the constructor using `new`
const player3  = new Player('Bob', 'X')
console.log(player3.name)