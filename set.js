let conj = new Set([10, 20, 30, 40])

console.log(conj)// true

conj.add(50) // adiciona um elemento ao conjunto    
conj.delete(20) // remove um elemento do conjunto

conj.forEach(valor =>  console.log(valor))

console.log(conj)

console.log(conj.has(30)) // true

conj.clear() // limpa o conjunto
console.log(conj.size) // 0 

