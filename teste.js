//FIX01
userStatus = prompt('Qual seu usuário?').toUpperCase()

while(userStatus !== 'A'){
    prompt('Qual seu usuário?').toUpperCase()
    if(userStatus !== 'A'){
        console.log('Acesso negado')
    }
}
console.log('Boas vindas, adm')