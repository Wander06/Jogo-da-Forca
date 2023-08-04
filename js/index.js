import palavras from "./palavras.js";

var palavraAleatoria = "";
var dica = "";
var arrayPalavraOcultada = [];
var palavraOcultada = "";
var letraUsuario = "";

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
    if(arrayPalavraOcultada !== []){
        arrayPalavraOcultada = []
    }
    for(var i = 0; i < palavraAleatoria.length; i++){
        arrayPalavraOcultada.push("-")
        palavraOcultada += "-"
    }
    console.log(arrayPalavraOcultada);
}

const verificarLetras = () => {
    
    if(palavraAleatoria.length == arrayPalavraOcultada.length){
        for(var i = 0; i < palavraAleatoria.length; i++){

            if(letraUsuario == palavraAleatoria[i]){
                arrayPalavraOcultada[i] = letraUsuario
                console.log(arrayPalavraOcultada)
            }
        }
    }

    palavraOcultada = arrayPalavraOcultada.join("")
    console.log(palavraOcultada)
}

const selecionarLetras = (event) => {
    var textoPalavra = document.querySelector(".palavra-oculta");

    letraUsuario = event.target.value;
    
    console.log(letraUsuario);
    verificarLetras()
    textoPalavra.innerHTML = palavraOcultada
}

const jogo = () => {
    escolherPalavras(palavras);
    ocultarPalavra();

    var textoPalavra = document.querySelector(".palavra-oculta");
    var textoDica = document.querySelector(".dica");

    textoPalavra.innerHTML = palavraOcultada;

    textoDica.innerHTML = dica;
}

const botoesLetras = document.querySelectorAll(".letras");

botoesLetras.forEach(botao => {
    botao.addEventListener("click", selecionarLetras);
});

document.querySelector(".comecar").addEventListener("click", jogo);
