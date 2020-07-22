var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var gameTitleBackground = document.getElementById("gameName");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

easyButton.addEventListener("click", function () {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var index = 0; index < squares.length; index++) {
    if (colors[index]) {
      squares[index].style.background = colors[index];
    } else {
      squares[index].style.display = "none";
    }
  }
  gameTitleBackground.style.background = "#ffa07a";
  colorDisplay.style.background = "#ffa07a";
});

hardButton.addEventListener("click", function () {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var index = 0; index < squares.length; index++) {
    squares[index].style.background = colors[index];
    squares[index].style.display = "block";
  }
  gameTitleBackground.style.background = "#ffa07a";
  colorDisplay.style.background = "#ffa07a";
});

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors";
  for (var index = 0; index < squares.length; index++) {
    squares[index].style.background = colors[index];
  }

  gameTitleBackground.style.background = "#ffa07a";
  colorDisplay.style.background = "#ffa07a";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var index = 0; index < squares.length; index++) {
  squares[index].style.background = colors[index];

  squares[index].addEventListener("click", function () {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "CORRECT!";

      changeColors(clickedColor);
      gameTitleBackground.style.background = clickedColor;
      colorDisplay.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "TRY AGAIN!";
      resetButton.textContent = "Play Again?";
    }
  });
}

function changeColors(color) {
  for (var index = 0; index < squares.length; index++) {
    squares[index].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var index = 0; index < num; index++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
