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
    public removerConta(){
        console.log("--------------------DELETAR CONTA--------------------")
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA PARA DELETAR: ")
        for(var i = 0; i < this.contas.length; i++){
            if(numeroConta === this.contas[i].getNumero()){
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
    
    public transferir(){
        //BUSCAR A CONTA DE ORIGEM
        var indexDestino;
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA: ")
        for(var i = 0; i < this.contas.length; i++){
            if(numeroConta === this.contas[i].getNumero()){
                indexDestino = i;
                
            return;
            }
        

        //PEDIR VALOR 
        //VERIFICAR SE TEM SALDO
        //BUSCAR A CONTA DE DESTINO

        //SACAR DA CONTA DE DESTINO
        //DEPOSITAR NA CONTA DE DESTINO
    }
}