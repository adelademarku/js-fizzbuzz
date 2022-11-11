/*stampato numeri da 1 a 100 */

for(let i = 0; i <= 100 ; i++){
    console.log(i);

   /*chiesto se il numero è multiplo di 3 e 5*/ 
if(i % 3 == 0 || i & 5 == 0) {console.log("FizzBuzz");}

else if(i % 5 == 0){console.log("Buzz");}

else if (i % 3 == 0){console.log("Fizz");}


}

