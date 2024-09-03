import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular, chavePix: string) {
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
        this.saldo = 0;
        this.titular = titular;
        this.chavePix = chavePix;
        this.data_criacao = new Date();

    }
    private numero: string;
    private saldo: number;
    private titular: Titular;
    private chavePix: string;
    private data_criacao: Date;

    public getNumero(): string {
        return this.numero
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(numero: number): void {
        this.saldo = this.saldo;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    
    public mostrarDadosConta() {
        console.log("-----DADOS CONTA-------")
        console.log(`Nome titular: ${this.titular.getNome()}`)
        console.log(`CPF titular: ${this.titular.getCpf()}`)
        console.log(`Chave PIX: ${this.chavePix}`)
        console.log(`Número da conta: ${this.numero}`)
        console.log(`Data criação: ${this.data_criacao}`)
        console.log(`SALDO ATUAL: R$${this.saldo.toFixed(2)}`)
    }


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