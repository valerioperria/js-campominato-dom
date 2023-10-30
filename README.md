### ESERCIZIO

**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Il computer deve generare 16 numeri casuali: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

**Logica programma**
1. Creare una funzione che:
- generi progressivamente dei numeri da un num. min. a un num. max.;
- inserisca ogni numero e un x classe all'interno di un div;
2. Inserire i div creati all'interno del DOM html;
3. Creare un bottone "start" che avvii la griglia;
4. Creare un generatore di numeri random, che non si ripetino mai;
5. Creare un array che racchiuda 16 numeri randomici (precedentemente creati) compresi tra min e max (già scelti per la creazione della griglia);
6. Creare un array "mosse" che andrà a contentere il numero di click effetuati;
7. Creare una funzione che:
- al click su una cella libera, questa si colori di azzurro (aggiungendo la classe "cll-active") e si aggiunga all'array mosse;
- al click su una cella bomba, questa si colori di rosso(aggiungendo la classe "cll-bomb") ;
- in caso si cliccasse una cella bomba appaia il messaggio "you lose" seguito dal numero di celle cliccate fin'ora;
- in caso si cliccassero tutte le celle libere, senza aver cliccato nessuna cella bomba, appaia il messaggio "you win" (numero delle mosse effetuate sia uguale a: la quantità delle celle totali meno la quantità delle celle bomba).