// while

//Ex1

/* Vamos criar um sistema em que a pessoa será solicitada a inserir
 vários números, um após o outro.


Quando a pessoa digitar o número '0', devemos parar de solicitar novos 
inputs (entradas) e imprimir no console a soma de todos os números 
inseridos.

Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
O resultado deve ser: 70 */


function somaNumerosInseridos ( ) {
    let num = Number(prompt(`Digite um número: `))
    

    let soma = 0

    console.log(`soma antes do laço: ${soma}`)

    while(num != 0){
        soma = soma + num
        num = Number(prompt(`digite outro numero`))

    }
    console.log(`A soma depois de cada repetição: ${soma}`)
}

//somaNumerosInseridos()


// EX@

/* Vamos escrever um programa que recebe um número do usuário.
Esse programa deve escrever os números de 0 até o valor que foi 
digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, 
onde X é o número digitado. */

function imprimeNumerosAteNumeroEscolhido () {
    let numero = Number(prompt("Digite um numero:"))

    // i++
    for(let i = 0; i<= numero;i++) {
        console.log(i)
    }
}

//imprimeNumerosAteNumeroEscolhido()


// EX3

const numeros = [1,7,5,6,9,78,66]

function imprimeMsgArray (array) {
    console.log(array)
    for(let i = 0; i < array.length; i++) {
        console.log(`O elemento de indice ${i} é ${array[i]}`)
    }
}

//imprimeMsgArray(numeros)




function tipoDeUsuario () {
    let user = prompt(`Digite o tipo de usuario de acordo com a LETRA correspondente
    A = Administrador,
    B = Usario Comum,
    C = Usuario Assinante`).toUpperCase()
  

    while(user !== 'A') {
        console.log('Acesso Negado!')

        user =  prompt(`Digite o tipo de usuario de acordo com a LETRA correspondente
        A = Administrador,
        B = Usario Comum,
        C = Usuario Assinante`).toUpperCase()

        console.log('Acesso Autorizado!')
    }

}

//tipoDeUsuario()


/*
function tipoDeUsuario() {
    let user = ""
    let acessoPermitido = false
  
    while (!acessoPermitido) {
      user = prompt(`Digite o tipo de usuário de acordo com a LETRA correspondente
        A = Administrador,
        B = Usuário Comum,
        C = Usuário Assinante`).toLocaleUpperCase()
  
      if (user === "A") {
        console.log("Acesso concedido para Administrador");
        acessoPermitido = true
      } else if (user === "B") {
        console.log("Acesso concedido para Usuário Comum");
        acessoPermitido = true
      } else if (user === "C") {
        console.log("Acesso concedido para Usuário Assinante");
        acessoPermitido = true
      } else {
        console.log("Tipo de usuário inválido. Tente novamente.")
      }
    }
  }
  
  tipoDeUsuario()*/


  function tabuadaDeDois () {

    let numero = Number(prompt('Digite um numero para ver sua tabuada: '))
    for(let i = 1; i <= 10; i++) {
        console.log(i * numero)
    }
  }


//tabuadaDeDois()

const arr = ['joao','maria','lucas']

const arr2 = ['maça','banana','laranja']


function arrayString (array) {

    for(let i = 0; i < array.length; i++ ) {
        console.log(array[i].toUpperCase())
    }

    }

    arrayString(arr)
    arrayString(arr2)





