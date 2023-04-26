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


// starting the game 
startBtn.addEventListener("click", function () {
	eleGrid.classList.remove('hidden')
	info.classList.add('hidden')


	// switching between difficulty level
	const level = document.querySelector("#level").value;
	let cellWidth;
	if (level == "easy") {
		cellWidth = 100;
	} else if (level == "mid") {
		cellWidth = 81;
	} else if (level == "hard") {
		cellWidth = 49;
	}


	// creating cell element
	eleGrid.innerHTML = "";
	for (let i = 1; i <= cellWidth; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}


	// putting number inside cell element
	const listCell = document.querySelectorAll(".cell");
	for (let i = 0; i < listCell.length; i++) {
		let cell = listCell[i];
		

		// adding clicked class and lose pop-up
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
			

			// adding win pop-up and removing grid
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
	

	// adding difficulty class to cell and removing win/lose pop-up
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


	//generating 16 "bombs" and putting them in arrBombs
	arrBombs = [];
	for (let i = 1; i <= 16; i++) {
		bombs = getRndInteger(1, cellWidth, arrBombs);
		arrBombs.push(bombs);
	}	

	
});




// function-------------------------------------------------------------------

function getRndInteger(min, max, arr) {
	let rand;
	do {
		rand = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (arr.includes(rand));
	return rand;
}


/*FIXME: function win(numCel,diff) {
	if (score == (99-numCel) && level == `${diff}`) {
		eleWin.classList.remove('hidden')
	}
}*/