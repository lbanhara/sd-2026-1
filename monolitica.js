//api eh conjunto de regras e protocolos que vao permitir que aplicações se comuniquem e troquem dados, recursos 
//sem se preocupar com dados em si, ou seja, a api é uma interface de comunicação entre sistemas, onde um sistema pode solicitar dados ou serviços 
// de outro sistema, e a api é responsável por processar essa solicitação e retornar a resposta adequada.

//REST utiliza http para comunicação entre cliente e servidor, onde o cliente faz uma solicitação (request) para o servidor, e o servidor processa essa 
// solicitação e retorna uma resposta (response) para o cliente. As operações
// mais comuns em REST são: GET (para obter dados), POST (para criar novos dados), PUT (para atualizar dados existentes) e DELETE (para excluir dados).

//restfull - éh uma interface de programação que segue os principios de rest. utulizam a comunicação http   get / post / put / delete para CRUD

// é um unico código, processo os recursos são processados em um unico lugar, ou seja, o código é monolítico, onde todas as funcionalidades 
// estão interligadas e dependentes umas das outras.
// vantagens:
// - mais simples de desenvolver e manter, pois tudo está em um único lugar
// - mais fácil de testar, pois todas as funcionalidades estão interligadas
// - mais fácil de escalar, pois todas as funcionalidades estão interligadas
// desvantagens:
// - mais difícil de escalar, pois todas as funcionalidades estão interligadas
// - mais difícil de manter, pois todas as funcionalidades estão interligadas
// - mais difícil de testar, pois todas as funcionalidades estão interligadas

const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuario.id = usuarios.length + 1; // Gerar um ID simples para o usuário
    usuarios.push(usuario);
    
    //res.send({ message: "Usuário criado com sucesso" , usuario});
    res.status(201).json({ message: "Usuário criado com sucesso" , usuario}); // Retorna status 201 para indicar que o recurso foi criado
});

app.get('/usuarios', (req, res) => {

    res.status(200).json(usuarios); // Retorna a lista de usuários em formato JSON
});

app.get('/usuarios/:id', (req, res) => {
//id que tem na url, está na lista?
    const id = parseInt(req.params.id)

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }   
    res.status(200).json(usuario); // Retorna o usuário encontrado em formato JSON
});


app.put("/usuarios/:id", (req, res) => {

    const id = parseInt(req.params.id)


    const index = usuarios.findIndex(u => u.id === id)

    if (index === -1){
        return res.status(404).json({erro: "Usuário não encontrado"})
    }

    usuarios[index] = {...req.body, id}

    res.status(200).json({message: "Usuário atualizado completamente", usuario: usuarios[index]})

})

app.patch('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    usuarios[index] = { ...usuarios[index], ...req.body }; // Atualiza o usuário com os dados fornecidos
    res.status(200).json({ message: "Usuário atualizado parcialmente com sucesso", usuario: usuarios[index] }); // Retorna o usuário atualizado em formato JSON
});


app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    const removido = usuarios.splice(index, 1); // Remove o usuário do array 1 elemento na posição do index
    res.status(200).json({ message: "Usuário deletado com sucesso", usuario: removido[0] }); // Retorna o usuário removido em formato JSON
});




app.post('/pedidos', (req, res) => {
    const pedido = req.body;
    pedido.id = pedidos.length + 1; // Gerar um ID simples para o pedido

    pedidos.push(pedido);
    
    //res.send({ message: "Pedido criado com sucesso" , pedido}); 
    res.status(201).json({ message: "Pedido criado com sucesso" , pedido}); // Retorna status 201 para indicar que o recurso foi criado 

});

app.get('/dados', (req, res) => {
    // lógica para obter pedidos
    res.send({ usuarios, pedidos});

});

app.get('/pedidos', (req, res) => {
    // lógica para obter pedidos
    res.status(200).json({ pedidos});

});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/usuarios', (req, res) => {
    // lógica para obter usuários
    res.send('Lista de usuários');
});

