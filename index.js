let redBut = document.getElementById("red");
let blueBut = document.getElementById("blue");
let greenBut = document.getElementById("green");

// Selecting the elements inside the class square
let squares = document.querySelectorAll(".squares")
// console.log(squares)

const timesClicked = {
    "red": 0,
    "blue": 0,
    "green": 0
}

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.textContent = timesClicked[square.value]
    }
})

function clearGame() {
    squares.forEach(square => square.value = "")