// LAÇO WHILE
// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.
// Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

// let numeroUsuario
// let soma = 0

// while (numeroUsuario !==0){
//     numeroUsuario = +prompt('Insira um número:') // esse prompt irá se repetir até que a condição não seja atendida(qunado numeroUsuario for igual a 0)
//     console.log(numeroUsuario);
//     soma += numeroUsuario // <- isso é igual a soma = soma + numeroUsuario
// }
// console.log(soma);

// LAÇO FOR
// Vamos escrever um programa que recebe um número por input de usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

// let numeroFor = +prompt('Digite um número')

//     //↓variável  //↓condição  //↓incremento
// for(let i = 0; i <= numeroFor; i++){
//     console.log(i);
// }

// LAÇO FOR COM ARRAY
// Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O número do índice ${indice} é ${numero}”

// const arrayFor = [10, 2, 4, 16, 20, 3, 7]

//     //↓variável    //↓condição     //↓incremento
// for(let i = 0; i < arrayFor.length; i++){
//     console.log(`O número do indice ${i} é ${arrayFor[i]}`);
// }

// EXERCICIOS DE FIXAÇÃO

// 1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
// “A”: Administrador;
// “B”: Usuário comum;
// “C”: Usuário assinante

// Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
// Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa.

// let usuario
// while (usuario !== "A"){
//     usuario = prompt('Digite o seu tipo de usúario').toUpperCase()
//     if(usuario !== "A"){
//         console.log("Acesso Negado");
//     }
// } console.log("Boas-vindas, admin!");

//2. Escreva, utilizando o laço for, um programa que escreva a tabuada do 2

// const num = 2
// for(let i = 1; i <= 10; i++){
//     console.log(`${i} x 2 = ${i*2}`);
// }

// 3. Crie um laço for que recebe um array de strings, e imprima no console a string em caixa alta.

const arrayStrings = ["Labenu", "Abacate", "Marcelinho", "Ammal"]
for(let i=0; i<arrayStrings.length; i++){
    console.log(arrayStrings[i].toUpperCase());
 }
