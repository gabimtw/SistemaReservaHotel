class Reserva {
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
}

export default Reserva;