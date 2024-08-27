import Dono from "./Dono";

export default class Cachorro{
    constructor(nome: string, raca: string, cor: string, tamanho: string, dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.dono = dono;
    }

     nome: string;
     raca: string;
     cor: string;
     tamanho: string;
     dono: Dono;

     exibirCachorro(){
        console.log(`O CACHORRO ${this.nome} É DA RAÇA ${this.raca} E DA COR ${this.cor}`)
     }
     exibirDono(){
        console.log(`O dono do ${this.nome} é ${this.dono.nome} com telefone ${this.dono.telefone}`)
     }
}