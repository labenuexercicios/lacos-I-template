//AULA DE LAÇOS

//LAÇO WHILE
let numeroAleatorio = Number(prompt('Insira um número:'))
let soma = 0

while(numeroAleatorio != 0){
    
    soma = soma + numeroAleatorio
    console.log(soma);
    
    numeroAleatorio = Number(prompt('Tente outro número:'))
}
console.log('Você saiu do laço de soma!')

//LAÇO FOR
let numeroUsuario = Number(prompt('Insira um número:'))

for(let i = 0; i <= numeroUsuario; i++){
    console.log(i);
}

//LAÇO FOR ARRAYS
const arrayNum = [2, 4, 6, 8, 10]

for(let indice = 0; indice < arrayNum.length; indice++){
    console.log(`O número do índice ${indice} é ${arrayNum[indice]}`)
}
console.log('Fim do array!')

//EXERCÍCIO DE FIXAÇÃO

//EXERCÍCIO 1
let credUsuario = prompt('Insira a sua credencial:\n A - Administrador\n B - Usuário Comum\n C - Usuário Assinante').toLowerCase()

while(credUsuario != 'a'){
    console.log('Acesso negado!')
    credUsuario = prompt('Insira a sua credencial:\n A - Administrador\n B - Usuário Comum\n C - Usuário Assinante').toLowerCase()
}
console.log('Seja bem-vindo, Administrador(a).')

//EXERCÍCIO 2 
let tabuada = prompt('Insira o número da tabuada:')

for(i = 1; i <= 10; i++){

    console.log(`${i} X ${tabuada}:`, i*tabuada)

}

//EXERCÍCIO 3
const arrayString = ['Lucas', 'Samuel', 'Bruna', 'Gilvan', 'Rosilene']

for(i = 0; i < arrayString.length; i++){
    console.log(arrayString[i].toUpperCase());
}
