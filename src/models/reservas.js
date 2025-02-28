class Reservas {
    constructor(id, hospedeQuarto, clientes_id, dataEntrada, responsável, quarto, Pagamento, checkin, checkout) {
        this.id = id
        this.hospedeQuarto = hospedeQuarto;
        this.clientes_id = clientes_id;
        this.dataEntrada = dataEntrada;
        this.responsável = responsável;
        this.quarto = quarto;
        this.Pagamento = Pagamento;
        this.checkin = checkin;
        this.checkout = checkout;
    }

    setid(id){
        this.id = id
    }

    setHospedeQuarto(hospedeQuarto) {
        this.hospedeQuarto = hospedeQuarto;
    }

    setClientesId(clientes_id) {
        this.clientes_id = clientes_id;
    }

    setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    setResponsável(responsável) {
        this.responsável = responsável;
    }

    setQuarto(quarto) {
        this.quarto = quarto;
    }

    setPagamento(pagamento) {
        this.pagamento = pagamento;
    }

    setCheckin(checkin) {
        this.checkin = checkin;
    }

    setCheckout(checkout) {
        this.checkout = checkout;
    }

    getid(){
        return this.id
    }

    getHospedeQuarto() {
        return this.hospedeQuarto;
    }

    getClientesId() {
        return this.clientes_id;
    }

    getDataEntrada() {
        return this.dataEntrada;
    }

    getResponsável() {
        return this.responsável;
    }

    getQuarto() {
        return this.quarto;
    }

    getPagamento() {
        return this.Pagamento;
    }

    getCheckin() {
        return this.checkin;
    }

    getCheckout() {
        return this.checkout;
    }
}

export default Reservas