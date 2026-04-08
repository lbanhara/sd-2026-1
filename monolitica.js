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
    usuarios.push(usuario);
    res.send({ message: "Usuário criado com sucesso" , usuario});
});

app.post('/pedidos', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({ message: "Pedido criado com sucesso" , pedido}); 
});

app.get('/dados', (req, res) => {
    // lógica para obter pedidos
    res.send({ usuarios, pedidos});

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/usuarios', (req, res) => {
    // lógica para obter usuários
    res.send('Lista de usuários');
});

