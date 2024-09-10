import Veiculo from "./VVeiculos";

export class Carro extends Veiculo{
    private numeroPortas = number;
    constructor(marca: String, modelo: String, numeroPortas: number){
        super(marca, modelo, numeroPortas);
    }

}