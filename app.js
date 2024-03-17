console.log("hello-world");

//creare un form con boostrap //created

//create un input di km //created
//create un input di age//created
//creare un button //created

//quando l'utente click la cta

//-recupeare i dati del km
const kmElement = document.getElementById("km");
//-recuperare i dati del age
const ageElement = document.getElementById("age");

//creare la cta
const btnElement = document.getElementById("submit");

//html dom price text
const price = document.getElementById("html-text");

//-calcolare il prezzo finale

//--km percorsi
const kmPercorsi = 0.21;

//- deve stampare il prezzo totale nella pagina html

btnElement.addEventListener("click", function () {
  console.dir(kmElement);
  console.dir(ageElement);

  const km = parseInt(kmElement.value); //number
  const age = parseInt(ageElement.value); //number

  console.log(km, typeof km, age, typeof age);

  //-calcolare il prezzo finale
  //--calcare il km * kmPercorsi
  const totalePercorso = km * kmPercorsi;
  console.log(totalePercorso, typeof totalePercorso);

  //SE l'eta e < di 18
  //-ha un sconto del 20%
  //ALTRIMENTI SE age ha > 65
  //-ha un conto del 40%
  //ALTRIEMNTI
  //-ha un sconto del 0%

  if (km > 0 && age >= 0) {
    let sconto = 0;
    if (age < 18) {
      sconto = (totalePercorso * 20) / 100;
      console.log(sconto, "hai ottenuto un sconto dell 20%");
    } else if (age > 65) {
      sconto = (totalePercorso * 40) / 100;
      console.log(sconto, "hai ottenuto un sconto dell 40%");
    }

    const totale = totalePercorso - sconto;
    console.log(totale.toFixed(2)); //string
    price.innerHTML = `Here is you ticket from Milano to Genova <br />
    the totale price is ${totale.toFixed(2)} &euro;`;
  } else {
    alert("number inserirto nn e valido");
  }
});
