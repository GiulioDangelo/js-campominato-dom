const startBtn = document.querySelector(".start");
let points = 0;
let arrBombs = []
let bombs;

startBtn.addEventListener("click", function () {
	const eleGrid = document.querySelector(".grid");

	const level = document.querySelector("#level").value;
	let cellWidth = 100;
	if (level == "easy") {
		cellWidth = 49;
		// listCell.classList.toggle("easy");
	} else if (level == "mid") {
		cellWidth = 81;
	} else if (level == "hard") {
		cellWidth = 100;
	}

	eleGrid.innerHTML = "";
	for (let i = 1; i <= cellWidth; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}

	// TODO:
	const listCell = document.querySelectorAll(".cell");

	for (let i = 0; i < listCell.length; i++) {
		let cell = listCell[i];
		cell.addEventListener("click", colorCell);
	}

	if (level == "easy") {
		let easy = document.querySelectorAll(".cell");
		for (let i = 0; i < easy.length; i++) {
			easy[i].classList.add("easy");
		}
	} else if (level == "mid") {
		let mid = document.querySelectorAll(".cell");
		for (let i = 0; i < mid.length; i++) {
			mid[i].classList.add("mid");
		}
	}

	
	for (let i = 1; i <= 16; i++) {
		bombs = getRndInteger(1,cellWidth,arrBombs)
		arrBombs.push(bombs)
	}
	
});




// function
// -----------------------------------------------

function colorCell() {
	this.classList.toggle("clicked");
	if (condition) {
	} else {
		points++;
	}
}


function getRndInteger(min, max,arr) {
	let rand;
	do {
		rand = Math.floor(Math.random() * (max - min + 1) ) + min;
	} while (arr.includes(rand))
	return rand
}
