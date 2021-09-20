// o que são objetos?
// chave-valor (key-value pair)

/*const time = {
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
} */


/*console.log(time.nome);
time.jogar();
console.log(time.estado); */

// javascript - Factory Functions (Função de Fábrica)

function criarTime(nome,estado,jogadores) {
  return{
    nome,
    estado,
    jogadores,
    jogar() {
        console.log("iniciando o jogo...")
    }
  } 
}

// Pascal Case - UmDoisTresQuatro
function Time(nome,estado,jogadores){
    this.nome = nome;
    this.estado = estado;
    this.jogadores = jogadores;
    this.jogar = function() {
        console.log("inicia a partida")
    }
}

const time = new Time("Santos","SP",['marinho', 'jean mota']);
console.log(time);