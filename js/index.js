import palavras from "./palavras.js";

var palavraAleatoria = "";
var dica = "";
var palavraOcultada = "";

const escolherPalavras = (obj) => {
    var categorias = [];
    var indiceCategoria = 0;
    var indiceLista = 0;
    var lista;

    // Percorre o objeto e adiciona todas as propriedades em formato de string, na array categorias 
    for (var prop in obj) {
        categorias.push(prop);
    }

    // Sorteia um número de 0 ate o tamanho de itens na array categorias 
    indiceCategoria = Math.floor(Math.random() * categorias.length);

    // Seleciona a array de palavras dentro das propriedades do objeto de acordo com a categoria sorteada pelo indiceCategoria e armazena na var lista
    lista = obj[categorias[indiceCategoria]]["lista"];

    // Seleciona a propriedade dica dentro da propriedade do objeto de acordo com o indice sorteado pelo indiceCategoria na var dica
    dica = obj[categorias[indiceCategoria]]["dica"];

    // Sorteia um número de 0 até comprimento da variavel lista
    indiceLista = Math.floor(Math.random() * lista.length);

    // E finalmente sorteia a palavra aleatoria usando um indice aleatorio na var lista
    palavraAleatoria = lista[indiceLista];

    console.log(palavraAleatoria);
    console.log(dica);
}

const ocultarPalavra = () =>{
    if(palavraOcultada !== ""){
        palavraOcultada = ""
    }
    for(var i = 0; i < palavraAleatoria.length; i++){
        palavraOcultada += "-";
    }
    console.log(palavraOcultada);
}

const jogo = () => {
    escolherPalavras(palavras);
    ocultarPalavra();
    var textoPalavra = document.querySelector(".palavraOculta");
    var textoDica = document.querySelector(".dica");

    textoPalavra.innerHTML = palavraOcultada;
    textoDica.innerHTML = dica;
}

document.querySelector(".comecar").addEventListener("click", jogo);