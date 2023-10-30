// creare una funzione che generi progressivamente dei numeri da min a max, e che inserisca i numeri all'interno di un div insieme ad una classe (addClass)

function progressiveNumbers(min, max, addClass) {
    let x = "";
    for (i = min; i <= max; i++) {
        x += `<div class=${addClass}>${i}</div>`;
    }
    return x;
}

document.querySelector(".grid").innerHTML = progressiveNumbers(1, 100, "cell");

// fare un eventListner che al click sul bottone start avvii la griglia

const btn = document.querySelector("button");

const grid = document.querySelector(".grid");

btn.addEventListener("click", function () {
    grid.classList.add("active");
})

// creare un generatore di numeri random tra min e max

function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creare un array che comprenderà 16 numeri random, senza ripetizioni, compresi tra min e max (le bombe)

function bombs(min, max) {
    const result = [];
    while (result.length < 16) {
        const rndNum = rndNumber(min, max);
        if (!result.includes(rndNum)) {
            result.push(rndNum);
        }
    }
    return result;
}

// console.log(bombs(1, 100));


// fare in modo che al click su x cella questa si colori di azzurro se libera o si colori di rosso se bomba. Poi, se si cliccassero tutte le celle libere, dovrà apparire il messaggio "you win". Altrimenti, se si cliccasse una cella bomba, dovrà apparire il messaggio "you lose" seguito dal numero di mosse(click sulle celle) effettuati 

const cll = document.querySelectorAll(".cell");
// console.log(cll.length)

const cllBomb = bombs(1, 100);
// console.log(cllBomb.length)
// for (let i = 0; i < cllBomb.length; i++) {
//     console.log(parseInt(cllBomb[i]))
// }

// console.log(cll.length - cllBomb.length)

const outcome = document.getElementById("outcome");

const moves = [];

for (let i = 0; i < cll.length; i++) {

    cll[i].addEventListener("click", function () {

        if (cllBomb.includes(parseInt(cll[i].textContent))) {
            cll[i].classList.add("cll-bomb");
            // console.log(parseInt(cll[i].textContent)+ " bomb");
            // console.log("you lose")
            // console.log(`your moves were ${moves.length}`) 
            outcome.innerHTML = `YOU LOSE your moves were ${moves.length}`;
            outcome.classList.add("lose");
        } else {
            cll[i].classList.add("cll-active");
            // console.log(parseInt(cll[i].textContent));
            moves.push(cll[i]);
            if (moves.length === (cll.length - cllBomb.length)) {
                // console.log("you win");
                outcome.innerHTML = "YOU WIN";
                outcome.classList.add("win");
            }
        }
    })
}
