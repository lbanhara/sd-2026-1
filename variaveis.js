/*variaveis em js são case sensitive nome e NOME SÃO DIFERENTES
- variaveis em JS tem suporte a unicode ou seja podem contem caracteres acentuados e emojis
nome_completo snake_case
nomeCompleto camel case
NomeCompleto PascalCase

declaração de variaveis


*/
var nome = "João" //tem escopo global ou de função pode ser redeclarada ou redefinida
//let sobrenome = "Silva" //tem escopo de bloco, não pode ser redeclarada, mas pode ser retribuido
//sobrenome = "Miguel"

if (true){
    var nome = "João" //tem escopo global ou de função pode ser redeclarada ou redefinida
    let sobrenome = "Silva" //tem escopo de bloco, não pode ser redeclarada, mas pode ser retribuido
    sobrenome = "Miguel"
    //console.log(sobrenome)
    //const idade = 30 // tem escopo de bloco, não pode ser redeclarada e nem retribuida
}


console.log(nome)
//console.log(sobrenome)
//console.log(idade)
