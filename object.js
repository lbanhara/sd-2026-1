//chaves sempre são strings
//podem ter metodos e propriedades
//podem ser crias por instancias 

let pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor',
    endereco: {
        rua: 'Rua A',
        numero: 123}

    }

    console.log(pessoa.nome) // João
    console.log(pessoa.idade) // 30
    console.log(pessoa['idade']) // 30
    console.log(pessoa.profissao) // Desenvolvedor
    console.log(pessoa.endereco.rua) // Rua A
    console.log(pessoa.endereco.numero) // 123

    for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`)
    }

    console.log(Object.entries(pessoa)) // [ [ 'nome', 'João' ], [ 'idade', 30 ], [ 'profissao', 'Desenvolvedor' ], [ 'endereco', { rua: 'Rua A', numero: 123 } ] ]

