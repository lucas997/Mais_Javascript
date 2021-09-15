// divisível por 3 => Fizz
// divisível por 5 => Buzz 
// divisível por 3 e por 5 => FizzBuzz
// não divisível por 3 ou por 5 => entrada
// não é um número = > "não é um número";

const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada) {
    if(typeof entrada !== "number") {
        return "não é um número";

    } else if((entrada % 3 === 0) && (entrada % 5 === 0)) {
        return "fizzBuzz";

    } else if(entrada % 3 === 0) {
        return "fizz";

    } else if(entrada % 5 === 0) {
        return "Buzz";
    }
    return entrada;
}