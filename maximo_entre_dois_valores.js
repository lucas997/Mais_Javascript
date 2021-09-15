// máximo entre dois valores
// escreva uma função que usa 2 números e retorna o maior entre eles

/*
 maximo(10,5);

function maximo(n1,n2) {
    if(n1 > n2) {
        console.log("o maior valor é",n1);
    } else {
        console.log("o maior valor é", n2);
    }
} */

/* let valorMaior = max(10,10);
console.log(valorMaior) */

/* 
function max(n1,n2) {
    if(n1 > n2)
        return n1;
    else return n2;    
}
*/

/* 
function max(n1,n2) {
    return n1 > n2 ? n1 : n2;
} 
*/

let maxValue = max(1080,1080);
console.log(maxValue);

function max(n1,n2) {
    if(n1 > n2)
        return n1;
    else return n2;    
}