export default class Veiculo {
    constructor(marca: String, modelo: String) {
        this.marca = marca;
        this.modelo = modelo;
    }

    private marca: String;
    private modelo: String;
    private ano: number;
    private valor: number;
    private disponivel: boolean;
    private registrarTransferencia: string[] = []

    public getAno(): number {
        return this.ano
    }
    public setAno(ano: number): void{
        this.ano = ano
    }

    public getValor(): number {
        return this.valor 
    }
    public setValor(valor: number): void{
        this.valor = valor;
    }
    
    public getDisponivel(): boolean {
        return this.disponivel
    }
    public setDisponivel(disponivel: boolean): void{
        this.disponivel = disponivel;
    }
    
}
