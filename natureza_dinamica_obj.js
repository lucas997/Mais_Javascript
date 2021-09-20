// Natureza dinâmica de objetos

const mouse = {
    color: 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function() {
    console.log("mudando DPI");
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);