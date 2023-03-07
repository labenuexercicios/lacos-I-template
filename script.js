// Prática guiada - A

function somaNumeroInserido (){
    let num = Number(prompt(`Digite um número:`))
    
    let soma = 0
    
    while(num != 0){
        soma = soma + num
        num = Number(prompt(`Digite outro número:`))

        console.log(`soma de cada repetição ${soma}`)
    }
    console.log(`soma final: ${soma}`)
}

// - B
function imprimirNumerosAteEscolhido () {
    const numeroEscolhido = Number(prompt(`Digite um número:`))

    for (let i = 0; i <= numeroEscolhido; i = i + 5){
        console.log(i)
    }
}


// - C
const numeros = [24, -400, 534, 285, 111111, 8, 14]

function imprimirArray (array){
    console.log(array)

    for (let i = 0; i < array.length; i++){
        console.log(`O elemento de índice ${i} é ${array[i]}`)
    }
    
}

// GUARDAR NA CABEÇA
function permiteAdmin() {
    let tipoUser = prompt(`Digite o tipo de usuário de acordo com a legenda abaixo:
    "A" para administrador
    "B" para usuário comum
    "C" para usuário assinante`).toUpperCase()
    
    while(tipoUser != "A"){
        console.log(`Acesso negado!`)

        tipoUser = prompt(`Digite o tipo de usuário de acordo com a legenda abaixo:
        "A" para administrador
        "B" para usuário comum
        "C" para usuário assinante`).toUpperCase()
    }
    console.log(`Boas vindas!`)
}
permiteAdmin()