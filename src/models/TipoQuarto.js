class Quartos {
    constructor(id, tipo, status = false) {
        this.id = id;
        this.tipoQuarto = this.definirTipoQuarto(tipo);
        this.status = { reservado: status }; // Objeto booleano indicando reserva
    }

    definirTipoQuarto(tipo) {
        const tiposDisponiveis = {
            "Suite": { nome: "Suite", preco: 300, capacidade: 4 },
            "Casal": { nome: "Casal", preco: 200, capacidade: 2 },
            "Solteiro": { nome: "Solteiro", preco: 150, capacidade: 1 }
        };

        if (tiposDisponiveis[tipo]) {
            return tiposDisponiveis[tipo];
        } else {
            console.log("Erro: Tipo de quarto inválido!");
            return null;
        }
    }

    setId(id) {
        this.id = id;
    }

    setTipoQuarto(tipo) {
        this.tipoQuarto = this.definirTipoQuarto(tipo);
    }

    setStatus(reservado) {
        if (typeof reservado === "boolean") {
            this.status.reservado = reservado;
        } else {
            console.log("Erro: O status deve ser um valor booleano (true ou false)!");
        }
    }

    getStatus() {
        return this.status.reservado ? "Reservado" : "Disponível";
    }

    getId() {
        return this.id;
    }

    getTipoQuarto() {
        return this.tipoQuarto;
    }
}

export default Quartos;