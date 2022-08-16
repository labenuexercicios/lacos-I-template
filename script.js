// PRÁTICA GUIADA

// PARTE 1 - WHILE

// let num = +prompt('Insira um número, para parar digite 0:');
// let soma = 0;

// while (num !== 0) {
//     soma = soma+num;
//     num = +prompt('Insira um número, para parar digite 0:');
// }; alert(`A soma dos números é ${soma}!`);

// PARTE 2 - FOR 

// let num = +prompt('Insira um número:');

// for(let i = 0; i <= num; i++) {
//     console.log(i);
// };

// PARTE 3 - FOR COM ARRAYS

// const array = [4, 6, 9, 24, 29, 32, 60];

// for (let i = 0; i <= array.length; i++) {
//     console.log(`O número do índice ${i} é ${array[i]}.`);
// };

// EXERCÍCIO DE FIXAÇÃO

// PARTE 1

// let tipoUsuario = prompt(`Digite o seu tipo de usuário: \n\n \"A\": Adiministrador; \n \"B\": Usuário comum; \n \"C\": Usuário assinante.`).toUpperCase();
// let usuario = ['A', 'B', 'C'];

// while (tipoUsuario !== 'A') {
//     console.log("Acesso negado!");
//     tipoUsuario = prompt(`Digite o seu tipo de usuário: \n\n \"A\": Adiministrador; \n \"B\": Usuário comum; \n \"C\": Usuário assinante.`).toUpperCase();
// } console.log("Boas-vindas, Admin!");

// PARTE 2

// for (let tabuada2 = 0; tabuada2 <= 10; tabuada2++) {
//     console.log(`${tabuada2}x2 = ${tabuada2*2}`);
// }

// PARTE 3

// let arrayStrings = ['Bruno', 'Nayara', 'Danilo', 'Inara', 'Marcos'];

// for (let i = 0; i < arrayStrings.length; i++) {
//     console.log(arrayStrings[i].toUpperCase());
// };