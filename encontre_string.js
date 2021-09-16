// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: "John Wick",
    ano: 2016,
    ator: "Keanu Reeves",
    diretor: "Fulano"
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {

    for(prop in obj) {

        if(typeof obj[prop] === "string") {
            console.log(prop,obj[prop]);
        }
    }
}