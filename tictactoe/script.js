// Initialisation
let tour = 'X';
const cases = document.querySelectorAll('.case');

// Écouteur d'événement pour chaque case
cases.forEach((cell) => {
	cell.addEventListener('click',caseClic);
});

function caseClic(e) {
	// Vérifier si la case est vide
	if (e.target.textContent === '') {
		e.target.textContent = tour;

		// Vérifier si quelqu'un a gagné
		if (verifierGagnant()) {
			alert(tour + ' a gagné!');
			return;
		}

		// Changer de joueur
		tour = tour === 'X' ? 'O' : 'X';
	}
}

function verifierGagnant() {
	const plateauArray = Array.from(cases);
	// Lignes
	for (let i = 0; i < 9; i += 3) {
		if (plateauArray[i].textContent && plateauArray[i].textContent === plateauArray[i + 1].textContent && plateauArray[i].textContent === plateauArray[i + 2].textContent) {
			return true;
		}
	}
	// Colonnes
	for (let i = 0; i < 3; i++) {
		if (plateauArray[i].textContent && plateauArray[i].textContent === plateauArray[i + 3].textContent && plateauArray[i].textContent === plateauArray[i + 6].textContent) {
			return true;
		}
	}
	// Diagonales
	if (plateauArray[0].textContent && plateauArray[0].textContent === plateauArray[4].textContent && plateauArray[0].textContent === plateauArray[8].textContent) {
		return true;
	}
	if (plateauArray[2].textContent && plateauArray[2].textContent === plateauArray[4].textContent && plateauArray[2].textContent === plateauArray[6].textContent) {
		return true;
	}
	return false;
}

