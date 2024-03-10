console.log("hello- world");

// come abbiamo fatto i classe per il calcole delle calorie, trasformate l’esercizio del calcolo del biglietto del treno in modo da usare un form di bootstrap.
// create una pagina html che contenga due input di tipo text: una per inserire i km e una per inserire l’eta
// aggiungete un button
// L’utente potrà compilare il form e cliccare il pulsante per calcolare il prezzo. La logica è la stessa del vecchio esercizio, ma ogni volta che l’utente clicca sul pulsante dovete:
// recuperare i km dall’input dei km
// recuperare l’eta dall’input dell’età
// calcolare il prezzo
// stampare il prezzo nella pagina html in un semplice div

//create a input for the km
//create a input for the age
//create a button

const kmInputElement = document.getElementById("km");
const ageInputElement = document.getElementById("age");
const buttonSubmit = document.getElementById("submit");
const ticketElement = document.getElementById("ticket");

console.dir(kmInputElement, ageInputElement);

const km = kmInputElement.value;
const age = ageInputElement.value;

console.log(km, age);

buttonSubmit.addEventListener("click", function () {
  const km = parseInt(kmInputElement.value);
  const age = parseInt(ageInputElement.value);

  // sconto = 0;
  if (age < 18) {
    sconto = age * 0.2;
  } else if (age > 65) {
    sconto = age * 0.4;
  } else {
    sconto = age * 1;
  }

  console.log(km, typeof km, age);
  console.log(sconto.toFixed(2));

  ticketElement.innerHTML = `Totally tavled (${km} km) and  has  been suscessfull purched the ticket here is yout total prize ${
    sconto.toFixed(2) + " &euro;"
  }`;
});
