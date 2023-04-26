const startBtn = document.querySelector(".start");
const info = document.querySelector(".info");
const eleGrid = document.querySelector(".grid");
let eleLose = document.querySelector(".lose");
let eleScore = document.querySelector(".score");
let eleWin = document.querySelector('.win')
let score = 0;
let bombs;
let arrBombs;

eleLose.classList.add('hidden');
eleGrid.classList.add('hidden')
eleWin.classList.add('hidden')


startBtn.addEventListener("click", function () {
	eleGrid.classList.remove('hidden')
	info.classList.add('hidden')


	const level = document.querySelector("#level").value;
	let cellWidth;
	if (level == "easy") {
		cellWidth = 100;
	} else if (level == "mid") {
		cellWidth = 81;
	} else if (level == "hard") {
		cellWidth = 49;
	}


	eleGrid.innerHTML = "";
	for (let i = 1; i <= cellWidth; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}


	const listCell = document.querySelectorAll(".cell");
	for (let i = 0; i < listCell.length; i++) {
		let cell = listCell[i];
		
		cell.addEventListener("click", function colorCell() {
			if (arrBombs.includes(i + 1)) {
				this.classList.toggle("explode");
				eleLose.classList.remove('hidden');
				eleGrid.classList.add('hidden');
			} 
			else{
				this.classList.toggle("clicked");
				score++;
				eleScore.innerHTML = score
			};
			

			if (score === 84 && level === 'easy') {
				eleWin.classList.remove('hidden')
				eleGrid.classList.add('hidden');
			}
			else if(score === 65 && level == 'mid'){
				eleWin.classList.remove('hidden')
				eleGrid.classList.add('hidden');
			}
			else if(score === 33 && level == 'hard'){
				eleWin.classList.remove('hidden')
				eleGrid.classList.add('hidden');
			};
		});
				
	}
	
	
	if (level == "easy") {
		let easy = document.querySelectorAll(".cell");
		for (let i = 0; i < easy.length; i++) {
			easy[i].classList.add("easy");
			eleLose.classList.add('hidden');
			eleWin.classList.add('hidden');
			score = 0;
		}
	} else if (level == "mid") {
		let mid = document.querySelectorAll(".cell");
		for (let i = 0; i < mid.length; i++) {
			mid[i].classList.add("mid");
			eleLose.classList.add('hidden');
			eleWin.classList.add('hidden');
			score = 0;
		}
	}else if (level == "hard") {
		let hard = document.querySelectorAll(".cell");
		for (let i = 0; i < hard.length; i++) {
			hard[i].classList.add("hard");
			eleLose.classList.add('hidden');
			eleWin.classList.add('hidden');
			score = 0;
		}
	}


	arrBombs = [];
	for (let i = 1; i <= 16; i++) {
		bombs = getRndInteger(1, cellWidth, arrBombs);
		arrBombs.push(bombs);
	}	

	
});

// function
// -----------------------------------------------

function getRndInteger(min, max, arr) {
	let rand;
	do {
		rand = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (arr.includes(rand));
	return rand;
}


function win(numCel,diff) {
	if (score == (99-numCel) && level == `${diff}`) {
		eleWin.classList.remove('hidden')
	}
}