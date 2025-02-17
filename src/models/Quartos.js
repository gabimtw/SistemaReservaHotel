class Quartos {
    constructor(id, TipoQuarto, Status){
        this.id = id
        this.TipoQuarto = ["Suite","Solteiro","Casal"]
        this.Status = Status
    }
    setId(id){
        this.id = id;
    }
    setTipoQuarto(TipoQuarto){
        if (this.TipoQuarto.includes(TipoQuarto)) {
            this.TipoQuarto = TipoQuarto; // Define o tipo de quarto se for válido
        } else {
            console.log("Erro: Tipo de quarto inválido!");
        }
    }
    setStatus(estado){
        if (typeof estado === "boolean"){//inspeciona qual o valor da variavel que no caso é boolean
            this.Status.estado = estado; // Define o status do quarto (true ou false)
        } else {
            console.log("Erro: O status deve ser um valor booleano (true ou false)!");
        }
    }

    getStatus() {
        return this.Status.estado ? "Reservado" : "Disponível"; // Retorna o status em texto
    }
    getId(){
        return this.id 
    }
    getTipoQuarto(){
        return this.TipoQuarto
    }
}    
export default Quartos;