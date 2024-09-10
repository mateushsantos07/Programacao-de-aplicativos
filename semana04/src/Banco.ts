import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';
import Titular from './Titular';

export default class Banco {
    private contas: Array<ContaBancaria> = [];

    private save(conta: ContaBancaria) {
        this.contas.push(conta);
        console.log(`Conta com numero ${conta.getNumero()} foi criada com sucesso!`)
    }
    public addAccount() {
        var nome = leia.question("DIGITE SEU NOME: ")
        var cpf = leia.question("DIGITE SEU CPF: ")
        var chavePix = leia.question("DIGITE CHAVE PIX: ")
        var tipoDeConta = leia.keyInSelect(["CORRENTE", "POUPANCA"])

        var titular = new Titular(nome, cpf)
        var conta: ContaBancaria;
        if (tipoDeConta === 1) {
            conta = new ContaCorrente(titular, chavePix);
        } else {
            conta = new ContaPoupanca(titular, chavePix);
        }
        this.save(conta)
    }
    public removerConta() {
        console.log("--------------------DELETAR CONTA--------------------")
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA PARA DELETAR: ")
        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
                this.contas.splice(i, 1)
                console.log(`CONTA ${numeroConta} EXLCUIDA COM SUCESSO`)
                return;
            }
        }
        /*var contaExiste = this.contas.find(conta => conta.getNumero() === numeroConta)
        if(!contaExiste){
            console.log(`NAO FOI ENCONTRADO NENHUMA CONTA COM O NUMERO${numeroConta}`)
            return;
        }*/

        console.log(`NAO FOI ENCONTRADO NENHUMA CONTA COM O NUMERO${numeroConta}`)
    }
    public mostrarContas() {
        console.table(this.contas)
    }

    public transferir() {
        // BUSCAR A CONTA DE ORIGEM
        var indexOrigem = this.contas.findIndex(conta => conta.getNumero() === leia.question("DIGITE O NUMERO DA CONTA ORIGEM: "));
    
        if (indexOrigem === -1) {
            console.log("A CONTA NÃO FOI ENCONTRADA!!!");
            return;
        }
    
        var numeroContaDestino = leia.question("INFORME O NUMERO DA CONTA DE DESTINO: ");
        var indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroContaDestino);
    
        if (indexDestino === -1) {
            console.log("A CONTA DE DESTINO NÃO EXISTE...");
            return;
        }
    
        var valor = leia.questionFloat("INFORME O VALOR DA TRANSFERENCIA: ");
        if (valor > this.contas[indexOrigem].getSaldo()) {
            console.log("VOCÊ NÃO TEM SALDO SUFICIENTE");
            return;
        }
    
        this.contas[indexOrigem].sacar(valor);
        this.contas[indexDestino].depositar(valor);
    }
}