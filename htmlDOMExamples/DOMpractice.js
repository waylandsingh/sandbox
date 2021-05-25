console.log('linked up and good')
// create a reference to the container div inside the body
const container = document.querySelector("#container");

// create the div to be added to the container
const content = document.createElement('div');
// make sure that the div has the content class
content.classList.add('content');
// set the text of the content
content.textContent = 'This is my content, yo';

// append the content div as a child to the container
container.appendChild(content);


// a <p> with red text that says “Hey I’m red!”
const redp = document.createElement('p');
redp.textContent = 'Hey I\'m red!';
redp.style.color = 'red';
container.appendChild(redp);

// an <h3> with blue text that says “I’m a blue h3!”
const blueHeader = document.createElement('h3');
[blueHeader.textContent, blueHeader.style.color] = ["a blue h3", 'blue']
container.appendChild(blueHeader)

// a <div> with a black border and pink background color with the following elements inside of it:
const blackBorderDiv = document.createElement('div');
blackBorderDiv.style.border = '1px solid black';
blackBorderDiv.style.backgroundColor = 'pink';
//     another <h1> that says “I’m in a div”
const inADiv = document.createElement('h1')
inADiv.textContent = "I'm in a div, bro";
blackBorderDiv.appendChild(inADiv)
//     a <p> that says “ME TOO!”
const inADivToo = document.createElement('p')
inADivToo.textContent = 'ME TOO'
blackBorderDiv.appendChild(inADivToo)
//     Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(blackBorderDiv);

// select the button
const button = document.querySelector("#btn");

button.addEventListener('click', e => {
    alert(e.target);
    e.target.style.backgroundColor='blue'
});

// selecting and adding a listener to all buttons SAME listener though
const allButtons = document.querySelectorAll("button")

// pass a function to execute for each button in the NOT array
allButtons.forEach( button => {
    // add the event listener...
    button.addEventListener('click', () => {
        //... which takes a function to execute on 'click'
        alert(button.id)
    });
});