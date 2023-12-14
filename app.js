let randomnumber = Math.floor(Math.random() * 101);
let remainingguesses = 10 ;
let previousvalues = [];

document. getElementById("subt"). addEventListener("click", () => {

    let regex = /^[a-zA-Z]+$/; 
  


let inputfield = document.getElementById("guessField").value

if (inputfield =="" ) {alert("šī vērtība ir obligāta");}
if (inputfield >100 ) {alert("Šī vērtība nevar būt lielāka par 100");}
if (inputfield <1) {alert("Šī vērtība nevar būt mazāka par 1");}
if (regex.test(inputfield)) {alert("šī vērtība nevar būt burts");}
if (remainingguesses == 0 ) {alert("spēle beigusies"); return;} else {


previousvalues.push(inputfield);
document.getElementsByClassName("guesses")[0].innerText = previousvalues.toString();

if (inputfield == randomnumber) {alert("atminējāt!");}
else {
    remainingguesses--
    document.getElementById("guessField").value = "";

    document.getElementsByClassName("lastResult")[0].innerText = remainingguesses;}


}
    


    
})

