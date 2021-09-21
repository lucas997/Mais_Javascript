// clonando objetos

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
