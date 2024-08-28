/*import Cachorro from "./Cachorro";
import Dono from "./Dono";

let d1 = new Dono("Cleiton", "(48)9845-1578")


let c1 = new Cachorro("Jorgin", "Labrador", "Preto", "Grande", d1);


c1.exibirCachorro();
c1.exibirDono();

var dataAtual = new Date();
console.log(dataAtual)*/

import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

var t1 = new Titular("João", "000.000.000-01")
var c1 = new ContaBancaria(t1, "joao@gmail.com");


c1.consultarSaldo();
c1.depositar(100);
c1.sacar(40);

console.log("========")
console.log(`Numero da conta:${c1.numero}`)
console.log(`Titular da conta:${c1.titular.nome}`)
console.log(`CPF do tirular:${c1.titular.cpf}`)
console.log(`Data de criação da conta:${c1.data_criacao}`)
console.log(`Saldo na conta:${c1.saldo}`)
console.log(`Chave pix do titular:${c1.chavePix}`)
