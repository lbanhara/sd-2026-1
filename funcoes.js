//declarativa
function saudacao(nome){
    return `Olá ${nome}`

}

console.log(saudacao("liana"))

//anonima
const soma = function(a,b) {
    return a+b
}

console.log (soma(6,3))

const sub = function(a,b){
    return a-b
}

function executarOperacao(funcao, x,y) {
    return funcao(x,y)    
}

console.log(executarOperacao (sub, 5,3))

const multiplicar = (a,b) => a*b
console.log (multiplicar(4,2))


