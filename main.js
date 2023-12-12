import { getEstoque, transacaoNoEstoque, limpaEstoque } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonLimparLista').addEventListener('click', () => {
        limpaEstoque();
        atualizaTela();
    });
});

atualizaTela();

