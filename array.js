// array [4][11][15][9]
//        0   1   2  3

let numeros = [10,20,30,40]

console.log(numeros[0]) // 10
console.log(numeros[1]) // 20
console.log(numeros[2]) // 30   
console.log(numeros[3]) // 40

// length
console.log(numeros.length) // 4

let frutas = ['banana', 'maçã', 'laranja', 'uva']

console.log(frutas[0]) // banana    
console.log(frutas[1]) // maçã
console.log(frutas[2]) // laranja
console.log(frutas[3]) // uva

frutas.push('abacaxi') // adiciona um elemento no final do array
frutas.unshift('morango') // adiciona um elemento no início do array

console.log(frutas) // [ 'morango', 'banana', 'maçã', 'laranja', 'uva', 'abacaxi' ] 

frutas.pop() // remove o último elemento do array
frutas.shift() // remove o primeiro elemento do array

frutas.splice(1, 1) // remove o elemento do índice 1  segundo parametro é quantidade de elementos a serem removidos

console.log(frutas) // [ 'banana', 'maçã', 'laranja', 'uva' ]

frutas.forEach((fruta,indice) => {
    console.log(`${indice}: ${fruta}`)}
)

let misto  = [10, 'banana', true, {nome: 'João'}, [1,2,3] ]

console.log(frutas[frutas.length - 1]) // uva

for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i}: para fruta ${frutas[i]}`)
}

for (let fruta of frutas) {
    console.log(`fruta: ${fruta}`)
}

for (let indice in frutas) {
    console.log(`indice ${indice}: para fruta ${frutas[indice]}`)
}

