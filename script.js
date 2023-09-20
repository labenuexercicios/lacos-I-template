function variosNumeros() {
    let numeros = Number(prompt("Insira um numero"))
    somaDosNumeros = 0;

    while (numeros !== 0) {

        somaDosNumeros = somaDosNumeros + numeros
        numeros = Number(prompt("Insira um numero"))

    }

    console.log("saimos do loop ")
    console.log(somaDosNumeros)

}

variosNumeros()


//exercicio 2 

function recebe () {
    numeroRecebido = Number(prompt("Digite um numero"))

    for (let i = 0; i <= numeroRecebido; i = i + 1) {
      console.log(i)
    }
     console.log("saiu do loop for ")
}

recebe()

//exercicio 3 

function array() {
    let numero = [1,2,3,4,5,6,7]
    
    for(let i = 0; i < numero.length; i++){
       // console.log(i)
        console.log(`O elemento de indice ${i} é ${numero[i]}`)
    }
}

array()