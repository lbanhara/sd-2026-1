let mapa = new Map()

mapa.set("nome", "João")
mapa.set("idade", 30)
mapa.set(false, "chave falsa")
mapa.set(10, "chave numérica")

console.log(mapa.get("nome")) // João
console.log(mapa.get("idade")) // 30
console.log(mapa.get(false)) // chave falsa

mapa.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
})

if (mapa.has(false))  { 
    console.log(mapa.get(false)) // chave falsa 
}

for (const [chave, valor] of mapa) {
    if (valor === "chave falsa") {
    console.log(`${chave}: ${valor}`)
    break
    }
}

console.log(mapa.delete(10)) // true
console.log(mapa.has(10)) // false

mapa.clear() // limpa o mapa
console.log(mapa.size) // 0