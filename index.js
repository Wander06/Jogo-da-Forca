var palavras = {
    frutas: {
        lista: ["Limão", "Laranja", "Tomate", "Uva", "Melancia", "Fruta-Pão"],
        dica: "A dica é uma fruta!"
    },

    carros: {
        lista: ["Corsel", "Corolla", "Fusca", "Chevette"],
        dica: "A dica é um tipo de carro!"
    }
}


const escolherPalavras = (obj) => {
    var categorias = []

    for(var chave in obj){
        console.log(chave)
        categorias.push(chave)
    }
    console.log(obj[categorias[0]])
}

escolherPalavras(palavras)