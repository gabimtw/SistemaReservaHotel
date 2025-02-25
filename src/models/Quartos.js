class Quartos {
    constructor(id, Quarto, Status) {
        this.id = id;
        this.Quarto = Quarto;
        this.Status = Status;
    }

    setId(id) {
        this.id = id;
    }

    setQuarto(Quarto) {
        this.Quarto = Quarto;
    }

    setStatus(Status) {
        this.Status = Status
    }

    getStatus() {
        return this.Status
    }

    getId() {
        return this.id;
    }

    getQuarto() {
        return this.Quarto;
    }
}

export default Quartos