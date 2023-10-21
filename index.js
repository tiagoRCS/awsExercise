//Server config
const express = require("express");
const PORT = 8000;
const app = express();

//Cache config
let cachedArray = [];

app.get('/data', (req, res) =>  {
    const newArray = obterNovoArray();

    const newArrayString = JSON.stringfy(newArray);
    const cachedArrayString = JSON.stringify(cachedArray);

    if (newArrayString !== cachedArrayString){
        cachedArray = newArray;
        res.status(200).json(newArray);
    } else {
        res.status(304).end();
    }
});

function obterNovoArray() {
    return [1, 2, 3, 4, 5];
}

//Formatação dos Dados
const pessoas = [
    { id: 1, nome: "Marcelo" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Maria" },
];

const carros = [
    { id: 1, modelo: "Fusca" },
    { id: 2, modelo: "Gol" },
    { id: 3, modelo: "Palio" },
];

const animais = [
    { id: 1, nome: "Cachorro" },
    { id: 2, nome: "Gato" },
    { id: 3, nome: "Papagaio" },
];

//Formatação URLs
app.get("/pessoas", (req, res) => {
    const json = JSON.stringify(pessoas);
    res.send(json);
    return;
});

app.get("/carros", (req, res) => {
    const json = JSON.stringify(carros);
    res.send(json);
    return;
});

app.get("/animais", (req, res) => {
    const json = JSON.stringify(animais);
    res.send(json);
    return;
});

//Console log
app.listen(PORT, () => {
    console.log("Servidor awsTest iniciado com sucesso na porta:" + PORT);
});