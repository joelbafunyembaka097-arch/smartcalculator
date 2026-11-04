// CALCULATOR

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    display.focus();
}

let clearTimer;
let longPress = false;

// Début de l'appui
function startClearPress(event) {
    event.preventDefault();

    longPress = false;

    clearTimer = setTimeout(function () {
        clearDisplay();
        longPress = true;
    }, 700);
}

// Fin de l'appui
function endClearPress() {
    clearTimeout(clearTimer);

    // Si l'appui était court
    if (!longPress) {
        deleteLastDigit();
    }
}

// Annuler l'appui
function cancelClearPress() {
    clearTimeout(clearTimer);
}

// Supprimer le dernier caractère
function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
    display.focus();
}

// Effacer tout l'écran
function clearDisplay() {
    display.value = "";
    display.focus();
}

//FONCTION CALCUL 

function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        // Gérer les puissances
        let expression = display.value.replace(/\^/g, "**");

        // Gérer les pourcentages
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        // Effectuer le calcul
        display.value = eval(expression);

    } catch (error) {
        display.value = "Error";
    }

    display.focus();
}

function squareroot() {
    try {
        if (display.value.trim() === "") {
            display.value = "Error";
            return;
        }

        // Récupérer le nombre ou calculer l'expression
        let number = Number(eval(display.value));

        // Vérifier si le nombre est valide
        if (!Number.isFinite(number) || number < 0) {
            display.value = "Error";
        } else {
            // Calculer la racine carrée
            display.value = Math.sqrt(number);
        }

    } catch (error) {
        display.value = "Error";
    }

    display.focus();
}