// objeto endereço

// criar um objeto endereço que contém:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

let endereco = {
    rua: "Rua real da torre",
    cidade: "Recife",
    cep: "12345-678"
};

function exibirEndereco(endereco) {
    for(let chave in endereco) {
        console.log(chave,endereco[chave]);
    }
}

exibirEndereco(endereco);