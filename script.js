/*collego java con html */

let containerPrincipale = document.querySelector(".containerN")



/*stampato numeri da 1 a 100 */

for (let i = 0; i <= 100; i++) {



    /*chiesto se il numero è multiplo di 3 e 5*/
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        containerPrincipale.innerHTML += '<div class="containerN"><div class="square"><p>' + "FizzBuzz" + '</p></div></div>';
    }

    else if (i % 3 == 0) {
        console.log("Fizz");
        containerPrincipale.innerHTML += '<div class="containerN"><div class="square"><p>' + "Fizz" + '</p></div></div>';

    }

    else if (i % 5 == 0) {
        console.log("Buzz");
        containerPrincipale.innerHTML += '<div class="containerN"><div class="square"><p>' + "Buzz" + '</p></div></div>';

    }
    else{
    containerPrincipale.innerHTML += '<div class="containerN"><div class="square"><p>' + i + '</p></div></div>';}

    

}

