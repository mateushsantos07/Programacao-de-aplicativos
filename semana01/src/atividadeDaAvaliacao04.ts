import leia from "readline-sync"

let idades: number[] = [];

let nomes: string[] = [];

let nomeNova: string;
let idadeNova: number;

let nomeVelha: string;
let idadeVelha: number;

function pedirInfoUsuario(qtd: number) {
    for (var i = 0; i < qtd; i++) {
        var nome = leia.question("INFORME O NOME: ");
        nomes.push(nome);
        var idade = leia.questionInt("INFORME A IDADE DE: ");
        idades.push(idade);
    }
}


function pessoaMaisNova() {
    for (var i = 0; i < idades.length; i++) {
        if (idadeNova === undefined || idades[i] < idadeNova) {
            idadeNova = idades[i];
            nomeNova = nomes[i];
        }
    }
    console.log(`A PESSOA MAIS NOVA É ${nomeNova} COM ${idadeNova} ANOS `);
}

function pessoaMaisVelha() {
    idades.forEach((idade, index) => {
        if (idadeVelha === undefined || idade > idadeVelha) {
            idadeVelha = idade;
            nomeVelha = nomes[index];
        }
    })
    console.log(`A PESSOA MAIS VELHA É ${nomeVelha} COM ${idadeVelha} ANOS `);
}

pedirInfoUsuario(5);
pessoaMaisNova();
pessoaMaisVelha();
