import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular, chavePix: string) {
        this.numero = String(Math.floor(Math.random()* 89999) + 10000);
        this.saldo = 0;
        this.titular = titular;
        this.chavePix = chavePix;
        this.data_criacao = new Date();

    }
    numero: string;
    saldo: number;
    titular: Titular;
    chavePix: string;
    data_criacao: Date;

    depositar(valor: number) {
        if (valor <= 0) {
            console.log("Valor do depósito é inválido")
        } else {
            this.saldo = this.saldo + valor;
            console.log(`O depósito de R$${valor} foi realizado com sucesso. O saldo atual é de ${this.saldo}.`)
        }
    }

    sacar(valor: number) {
        if (valor > this.saldo || valor <= 0) {
            console.log(`Saldo insuficiente para saque !!!`)
            return;
        }
        this.saldo -= valor;
        console.log(`O saldo de R$ ${valor} realizado com sucesso. O saldo atual é ${this.saldo}.`)

    }

    consultarSaldo() {
        console.log(`Seu saldo é de R$${this.saldo}.`)
    }
}