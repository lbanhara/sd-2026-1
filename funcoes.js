/* const { log } = require("console")
const { resolve } = require("path")

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

function numero (numero = 10){
    return `O número ${numero} é um número par`
}
//console.log(numero())
console.log(numero(26))

//anonima
//(function() {
  //      let segredo = 123
    //    console.log("autoexecutavel")
        
//}())

//console.log(segredo)

function processar (valor, callback){
    console.log("autoexecutavel")
    callback(valor)

}

processar(10, (num) => console.log(`resultado ${num*2}`))

function dobrar(num){
    console.log(`o dobro do numero ${num} é: `, num * 2)

}
processar(10, dobrar) */

async function exemplo(){
    console.log("antes");
    await new Promise(resolve => setTimeout(resolve, 1000) )
    console.log("depois");
}

exemplo()

function pegaNumero(){
    return Promise.resolve(10)
}
async function executar(){
    let num = await pegaNumero()
    console.log(num)
}
executar()