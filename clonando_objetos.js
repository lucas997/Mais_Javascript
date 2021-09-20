// clonando objetos

/* const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function () {
        console.log("fazendo uma ligação");
    }
}

const novoObjeto = Object.assign({
      bateria: 5000  
},celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2); 

*/

const time = {
    nome: "Sport",
    estado: "Pernambuco",
    jogadores : {
        goleiro: "Maílson",
        zagueiro: "Sabino",
        meioCampo: "Hernanes",
        atacante: "André",
    },
    jogar: function() {
        console.log("iniciando o jogo...")
    }
}

const novoObjeto = Object.assign({
      treinador: "gustavo florentin"    
},time);
console.log(novoObjeto);

const objeto2 = {...time};
console.log(objeto2);